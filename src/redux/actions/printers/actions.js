import axios from "axios";
import { PRINTERS_LOAD_SUCCESS } from "../actionsType"
import { finishLoad, startLoad } from "../general/actions";

const host = process.env.REACT_APP_API_HOST_PHP || 'http://localhost:9001';

export const printersLoad = () => {
    return async dispatch => {
        try{
            dispatch(startLoad());
            const response = await axios.get(host + '/api/printers');
            dispatch(printersLoadSuccess(response.data));
            dispatch(finishLoad());
        }catch(e){
            console.log(e)
        }
    }
}

export const printersLoadSuccess = (data) => {
    return {
        type: PRINTERS_LOAD_SUCCESS,
        data
    }
}