import { IUser } from "../interfaces/User.interface";
import axios, {AxiosResponse} from "axios";

const baseUrl = 'https://jsonplaceholder.typicode.com';


const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json',
    }
});

const getUsers = (): Promise<AxiosResponse<IUser[]>> => {
    return axiosInstance.get(`/users`)
}

/*const getUserNotAsync = (id: number): Promise<AxiosResponse<IUser>> => {
    return axiosInstance.get(`/user/`)
}*/


const getUser = async (id: number): Promise<AxiosResponse<IUser>> => {
    return await axiosInstance.get(`/user/`)
}


export {
    getUsers,
    getUser
    //getUserNotAsync
}
