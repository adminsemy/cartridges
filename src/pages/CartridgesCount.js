import axios from "axios";
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

export const CartridgesCount = () => {
    const [cartridges, setCartridges] = useState({loading: true, data: []});
    let count = 1;

    useEffect(() => {
        async function getData() {
            const host = process.env.REACT_APP_API_HOST_PHP || 'http://localhost:9001';
            const response = await axios.get(host + '/api/cartridges');
            setCartridges({loading: false, data: response.data});
        };
        getData()
    },[setCartridges]);

    console.log(cartridges)
    
    if (cartridges.loading === true) {
        return (
            <div>
                <div className="d-flex justify-content-center">
                    <div className="spinner-border m-5" role="status">
                    </div>
                </div>
            </div>
        )
    }

    return (

        
        <div>
            <table className="table table-hover table-light">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Имя</th>
                    <th scope="col">Цвет</th>
                    <th scope="col">Бренд</th>
                    <th scope="col">Имя Excel</th>
                    <th scope="col">Необходимый минимум</th>
                    <th scope="col">Всего</th>
                </tr>
            </thead>
            <tbody>

                {cartridges.data.map(cartridge => {
                    return (
                        
                         <tr key={cartridge.id}>
                            <td>{count++}</td>
                            <td><Link to={`/cartridge/${cartridge.id}`}>{cartridge.name}</Link></td>
                            <td>{cartridge.color}</td>
                            <td>{cartridge.producer}</td>
                            <td>{cartridge.nameExcel}</td>
                            <td>{cartridge.minimum}</td>
                            <td>{cartridge.all}</td>                            
                        </tr>
                    )
                })}
            </tbody>
            </table>
        
        </div>         
    )
}