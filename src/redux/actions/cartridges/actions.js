import axios from "axios";
import { CARTRIDGES_FINISH_LOAD, CARTRIDGES_LOAD_SUCCESS, CARTRIDGES_START_LOAD } from "../actionsType"

const host = process.env.REACT_APP_API_HOST_PHP || 'http://localhost:9001';

export const cartridgesLoad = () => {
    return async dispatch => {
        try {
            dispatch(cartridgesStartLoading());
            const response = await axios.get(host + '/api/cartridges');
            dispatch(cartridgesLoadSuccess(response.data));
            dispatch(cartridgesFinishLoading());
        } catch (e) {
            console.log(e)
        }
    }
}

export const cartridgesStartLoading = () => {
    return {
        type: CARTRIDGES_START_LOAD
    }
}

export const cartridgesFinishLoading = () => {
    return {
        type: CARTRIDGES_FINISH_LOAD
    }
}

export const cartridgesLoadSuccess = (data) => {
    return {
        type: CARTRIDGES_LOAD_SUCCESS,
        data        
    }
}