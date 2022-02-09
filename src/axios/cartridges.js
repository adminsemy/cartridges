import axios from "axios"

const host = process.env.REACT_APP_API_HOST_PHP || 'http://localhost:9001';

export const getCartridges = async () => {
    const response = await axios.get(host + '/api/cartridges');
    console.log(response.data);
    return response.data;
}