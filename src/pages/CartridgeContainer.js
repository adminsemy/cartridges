import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Loading } from "../components/Loading";
import { cartridgeLoad } from "../redux/actions/cartridges/actions";
import { colorCartridgesLoad } from "../redux/actions/colorCartridges/colorCartridgesActions";
import CartridgeForm from "../components/form/CartridgeForm";

const CartridgeContainer = props => {
    const navigate = useNavigate();
    const {loading, cartridge_data,
        cartridgeLoad,
        colorCartridges, colorCartridgesLoad} = props;
        
    const params = useParams();

    const id = params.id;
    const handleSubmit = (value) => {
        console.log(value)
        navigate("/")
    }
   
    useEffect(() => {         
        if (id) {
            cartridgeLoad(id)
        }
    },[id, cartridgeLoad]);    

    useEffect(() => {
        colorCartridgesLoad();
    },[colorCartridgesLoad]);
    
    if (loading) {
        return (
            <Loading />
        )
    }

    return (
        <CartridgeForm onSubmit={handleSubmit} initialValues={cartridge_data} colorCartridges={colorCartridges} />
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
        cartridgeLoad: (id) => dispatch(cartridgeLoad(id)),
        colorCartridgesLoad: () => dispatch(colorCartridgesLoad())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartridgeContainer)