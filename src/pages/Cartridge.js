import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CartridgeForm } from "../components/form/CartridgeForm";

export const Cartridge = () => {
    const params = useParams();
    const id = params.id;
    const [cartridge, setCartridge] = useState(
        {
            loading: true,
            data: {
                name: null,
                producer: null,
                nameExcel: null,
                color: '',
                minimum: 0,
                all: 0
            },
        }
    );
    const [colorCartridges, setColorCartridges] = useState([]);
    useEffect(() => {
        const host = process.env.REACT_APP_API_HOST_PHP || 'http://localhost:9001';
        async function getData() {
            const response = await axios.get(host + '/api/cartridge/'.id);
            setCartridge(
            {
                loading: false, 
                data: response.data
            });
        };
        
        if (id) {
            getData();
        }
    },[setCartridge, id]);
    console.log(cartridge.data)
    console.log(id)

    useEffect(() => {
        const host = process.env.REACT_APP_API_HOST_PHP || 'http://localhost:9001';
        async function getCartridgeColorData() {
            const response = await axios.get(host + '/api/cartridge/color/all');
            setColorCartridges(response.data);
        };            
        getCartridgeColorData();
    },[setColorCartridges]);

    return (
        <CartridgeForm cartridge={cartridge.data} colorCartridges={colorCartridges} />
    )
}