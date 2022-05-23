import axios from "axios";
import { PRINTERS_FINISH_LOAD, PRINTERS_LOAD_SUCCESS, PRINTERS_START_LOAD } from "../actionsType"

const host = process.env.REACT_APP_API_HOST_PHP || 'http://localhost:9001';

export const printersLoad = () => {
    return async dispatch => {
        try{
            dispatch(printersLoadStart());
            const response = await axios.get(host + '/api/printers');
            dispatch(printersLoadSuccess(response.data));
            dispatch(printersLoadFinish());
        }catch(e){
            console.log(e)
        }
    }
}
export const printersLoadStart = () => {
    return {
        type: PRINTERS_START_LOAD
    }
}

export const printersLoadFinish = () => {
    return {
        type: PRINTERS_FINISH_LOAD
    }
}

export const printersLoadSuccess = (data) => {
    return {
        type: PRINTERS_LOAD_SUCCESS,
        data
    }
}