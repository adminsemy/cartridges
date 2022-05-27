import axios from "axios";
import { CARTRIDGE_ORDER_SUCCESS } from "../actionsType";

const host = process.env.REACT_APP_API_HOST_PHP || 'http://localhost:9001';
export const orderCartridge = (printerId, cartridgeId) => {
    return async dispatch => {
        try {
            const response = await axios.post(host + `/api/cartridge/order`, {printer_id: printerId, cartridge_id: cartridgeId});
            dispatch(orderCartridgeSuccess(response.data.message))
        } catch (e) {
            console.log(e)
        }
    }
}

export const orderCartridgeSuccess = (message) => {
    return {
        type: CARTRIDGE_ORDER_SUCCESS,
        message
    }
}