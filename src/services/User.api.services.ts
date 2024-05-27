import { IUser } from "../components/interfaces/User.interface";
import axios from "axios";

const baseUrl = 'https://jsonplaceholder.typicode.com/users';


const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json',
    }
});

const getUsers = (): Promise<IUser[]> => {
    return axiosInstance.get('/')
        .then(response => response.data);
}

const getUser = (id: number): Promise<IUser> => {
    return axiosInstance.get(`/${id}`)
        .then(response => response.data);
}

// Асинхронна версія для getUser, якщо потрібно
/*const getUserAsync = async (id: number): Promise<IUser> => {
    const response = await axiosInstance.get(`/${id}`);
    return response.data;
}*/


export {
    getUsers,
    getUser
    //getUserAsync
}
