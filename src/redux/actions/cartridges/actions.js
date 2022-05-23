import axios from "axios";
import { CARTRIDGES_LOAD_SUCCESS, CARTRIDGE_LOAD_SUCCESS, CARTRIDGE_NEW } from "../actionsType"
import { finishLoad, startLoad } from "../general/actions";

const host = process.env.REACT_APP_API_HOST_PHP || 'http://localhost:9001';

export const cartridgesLoad = () => {
    return async dispatch => {
        try {
            dispatch(startLoad());
            const response = await axios.get(host + '/api/cartridges');
            dispatch(cartridgesLoadSuccess(response.data));
            dispatch(finishLoad());
        } catch (e) {
            console.log(e)
        }
    }
}

export const cartridgeOrder = () => {
    return async dispatch => {
        try {
            dispatch(startLoad());
            const response = await axios.get(host + '/api/cartridges');
            dispatch(cartridgesLoadSuccess(response.data));
            dispatch(finishLoad());
        } catch (e) {
            console.log(e)
        }
    }
}

export const cartridgeLoad = (id) => {
    return async dispatch => {
        try {
            dispatch(startLoad());
            const response = await axios.get(host + '/api/cartridge/' + id);
            dispatch(cartridgeLoadSuccess(response.data));
            dispatch(finishLoad());
        } catch (e) {
            console.log(e)
        }
    }
}

export const cartridgesLoadSuccess = (data) => {
    return {
        type: CARTRIDGES_LOAD_SUCCESS,
        data        
    }
}

export const cartridgeLoadSuccess = (data) => {
    return {
        type: CARTRIDGE_LOAD_SUCCESS,
        data        
    }
}

export const cartridgeNew = () => {
    return {
        type: CARTRIDGE_NEW
    }
}