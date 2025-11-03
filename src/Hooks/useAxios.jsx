import axios from "axios";

const AxiosUser = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxios = () => {
    return AxiosUser;
};

export default useAxios;