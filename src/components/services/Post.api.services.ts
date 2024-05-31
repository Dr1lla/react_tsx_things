import axios from "axios";
import {IPost} from "../interfaces/Post.interface";
import {AxiosResponse} from "axios/index";

const baseUrl = 'https://jsonplaceholder.typicode.com';

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json',
    }
});

const getPosts = (): Promise<AxiosResponse<IPost[]>> => {
    return axiosInstance.get('/posts')
}

const getPostOfUser = (userId: number): Promise<AxiosResponse<IPost[]>> => {
    return axiosInstance.get(`/posts?userId=` + userId)
}

const getPost = async (id: number): Promise<AxiosResponse<IPost>> => {
    return await axiosInstance.get(`/post/`)
}

export {
    getPosts,
    getPostOfUser,
    getPost
}