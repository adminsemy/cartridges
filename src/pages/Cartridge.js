import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Loading } from "../components/Loading";
import { CartridgeForm } from "../components/form/CartridgeForm";
import { cartridgeLoad, cartridgeNew } from "../redux/actions/cartridges/actions";
import { colorCartridgesLoad } from "../redux/actions/colorCartridges/colorCartridgesActions";

const Cartridge = props => {
    const {loading, cartridge_data,
        cartridgeNew, cartridgeLoad,
        colorCartridges, colorCartridgesLoad} = props;
    const params = useParams();
    const id = params.id;
       
    useEffect(() => { 
        
        if (id) {
            cartridgeLoad(id)
        } else {
            cartridgeNew()
        }
    },[id, cartridgeLoad, cartridgeNew]);

    

    useEffect(() => {
        colorCartridgesLoad();
    },[colorCartridgesLoad]);
    
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
        loading: state.general.loading,
        cartridge_data: state.cartridge.cartridge_data,
        colorCartridges: state.colorCartridges.color_cartridges
    }
}

const mapDispatchToProps = dispatch => {
    return {
        cartridgeNew: () => dispatch(cartridgeNew()),
        cartridgeLoad: (id) => dispatch(cartridgeLoad(id)),
        colorCartridgesLoad: () => dispatch(colorCartridgesLoad())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cartridge)