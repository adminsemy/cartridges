import React, { useContext } from "react";
import { useEffect } from "react";
import { connect, useStore } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Loading } from "../components/Loading";
import { cartridgeLoad } from "../redux/actions/cartridges/actions";
import { colorCartridgesLoad } from "../redux/actions/colorCartridges/colorCartridgesActions";
import CartridgeForm from "../components/form/CartridgeForm";
import { saveCartridge } from "../redux/actions/cartridges/cartridgesSaveActions";
import { AlertContext } from "../context/alert/AlertContext";

const CartridgeContainer = props => {
    const store = useStore();
    const {show} = useContext(AlertContext);
    const navigate = useNavigate();
    const {loading,
        cartridge_data,
        cartridgeLoad,
        colorCartridges,
        colorCartridgesLoad,
        saveCartridge} = props;
        
    const params = useParams();

    const id = params.id;
    const handleSubmit = async (cartridge) => {
        await saveCartridge(cartridge);
        if (store.getState().cartridge.cartridge_save_success === 'Success') {
            const cartridgeName = store.getState().cartridge.cartridge_data.name
            show(`Картридж ${cartridgeName} был успешно сохранен`, 'info')
        }
        console.log(cartridge)
        //navigate("/")
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
        colorCartridgesLoad: () => dispatch(colorCartridgesLoad()),
        saveCartridge: (cartridge) => dispatch(saveCartridge(cartridge))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartridgeContainer)