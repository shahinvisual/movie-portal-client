import axios from "axios";

const AxiosUser = axios.create({
    baseURL: 'https://movie-portal-server-iota-nine.vercel.app'
})
const useAxios = () => {
    return AxiosUser;
};

export default useAxios;