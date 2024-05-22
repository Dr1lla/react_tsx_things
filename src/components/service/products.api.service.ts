import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {
        'Content-Type': 'application/json'
    }
});

const getAllProducts = () => {
  return  axiosInstance.get('/products')
}

export {getAllProducts}