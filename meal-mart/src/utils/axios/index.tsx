import axios from 'axios';

export const apiGet = async (url: string) => {
    return await axios.get(url);
}