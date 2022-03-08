import axios from "axios";
import React, { useEffect, useState } from "react";

export const CurrentPrinterCartridges = (props) => {
    const { id } = props;
    const [cartridges, setCartridges] = useState({
        loading: true, 
        data: ''
    });
    useEffect(() => {
        setCartridges({
            loading: true, 
            data: ''
        });
        async function getData() {
            const host = process.env.REACT_APP_API_HOST_PHP || 'http://localhost:9001';
            const response = await axios.get(host + `/api/printer/${id}/cartridges`);
            setCartridges({
                loading: false, 
                data: response.data
            });
        };
        getData();
    },[id, setCartridges]);
    console.log(cartridges);
    return (
        
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-8">.col-md-4</div>
                <div className="col-md-4">.col-md-4 .ms-auto</div>
            </div>
        </div>
        
    )
}