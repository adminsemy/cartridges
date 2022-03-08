import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Loading } from '../components/Loading';
import { Table } from '../components/tables/PrintersTable';

export const Printers = () => {
    const [printers, setPrinters] = useState(
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
            const response = await axios.get(host + '/api/printers');
            setPrinters(
            {
                loading: false, 
                table: {
                    name: [
                        {id: 'id', name: 'ID'},
                        {id: 'name', name: 'Имя'},
                        {id: 'cartridges', name: 'Картриджи для принтера'},
                        {id: 'uin', name: 'UIN'},
                        {id: 'serial', name: 'Серийный номер'},
                        {id: 'inventory', name: 'Инвентарный номер'},
                        {id: 'button', name: 'Действия'},
                    ],
                    data: response.data
                  }
            });
        };
        getData()
    },[setPrinters]);

    console.log(printers);

    if (printers.loading === true) {
        return <Loading />
    } else {
        return (
            <Table table={printers.table}></Table>
        )
    }
}