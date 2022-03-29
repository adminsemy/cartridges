import axios from "axios";
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { Loading } from "../components/Loading";
import { Table } from "../components/tables/CartridgeTable";

export const CartridgesCount = () => {
    const [cartridges, setCartridges] = useState(
        {
            loading: true,
            table: {
                name: [],
                data: []
            }
        });

    useEffect(() => {
        async function getData() {  
            const host = process.env.REACT_APP_API_HOST_PHP || 'http://localhost:9001';
            const response = await axios.get(host + '/api/cartridges');
            setCartridges(
            {
                loading: false, 
                table: {
                    name: [
                        {id: 'id', name: 'ID'},
                        {id: 'name', name: 'Имя'},
                        {id: 'color', name: 'Цвет'},
                        {id: 'producer', name: 'Бренд'},
                        {id: 'nameExcel', name: 'Имя в Excel'},
                        {id: 'minimum', name: 'Минимум'},
                        {id: 'all', name: 'Всего'},
                    ],
                    data: response.data
                  }
            });
        };
        getData()
    },[setCartridges]);

    if (cartridges.loading === true) {
        return <Loading/>
    } else {
        return (
            <Fragment>
                <Link to={'/cartridge'}>
                    <button type="button" className="btn btn-primary">Новый картридж</button>
                </Link>
                <Table table={cartridges.table}></Table>
            </Fragment>
        )
    }
}