import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Loading } from "../components/Loading";
import { CartridgeForm } from "../components/form/CartridgeForm";
import { cartridgeLoad, cartridgeNew } from "../redux/actions/cartridges/actions";

const Cartridge = props => {
    const {loading, cartridge_data, cartridgeNew, cartridgeLoad} = props;
    const params = useParams();
    const id = params.id;
    
    const [colorCartridges, setColorCartridges] = useState([]);
    
    useEffect(() => { 
        
        if (id) {
            cartridgeLoad(id)
        } else {
            cartridgeNew()
        }
    },[id, cartridgeLoad, cartridgeNew]);

    

    useEffect(() => {
        const host = process.env.REACT_APP_API_HOST_PHP || 'http://localhost:9001';
        async function getCartridgeColorData() {
            const response = await axios.get(host + '/api/cartridge/color/all');
            setColorCartridges(response.data);
        };            
        getCartridgeColorData();
    },[setColorCartridges]);
    
    if (loading) {
        return (
            <Loading />
        )
    }

    return (
        <CartridgeForm cartridge={cartridge_data} colorCartridges={colorCartridges} />
    )
}

const mapStateToProps = state => {
    return {
        loading: state.cartridge.cartridges_loading,
        cartridge_data: state.cartridge.cartridge_data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        cartridgeNew: () => dispatch(cartridgeNew()),
        cartridgeLoad: (id) => dispatch(cartridgeLoad(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cartridge)