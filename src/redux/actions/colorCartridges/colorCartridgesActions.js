import axios from "axios";
import { COLOR_CARTRIDGES_LOAD_SUCCESS } from "../actionsType"
const host = process.env.REACT_APP_API_HOST_PHP || 'http://localhost:9001';

export const colorCartridgesLoad = () => {
    return async dispatch => {
        try {
            const response = await axios.get(host + '/api/cartridge/color/all');
            dispatch(colorCartridgesLoadSuccess(response.data))
        } catch(e) {
            console.log(e)
        }
    }
}

export const colorCartridgesLoadSuccess = (data) => {
    return {
        type: COLOR_CARTRIDGES_LOAD_SUCCESS,
        data
    }
}