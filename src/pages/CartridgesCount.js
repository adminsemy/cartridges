import axios from "axios";
import React, {useState, useEffect} from "react";
import { Table } from "../components/table";

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

    console.log(cartridges);

    if (cartridges.loading === true) {
        return (
            <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            </div>
        )
    } else {
        return (
            <Table table={cartridges.table}></Table>
        )
    }
}