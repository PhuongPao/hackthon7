import axios from "axios";

const api = axios.create();

api.interceptors.response.use((res) => res.data);
api.interceptors.request.use((config) => {
    // const privateKey = import.meta.env.VITE_PRIVATE_KEY;
    // config.headers["x-api-key"] = privateKey;
    return config;
});

export const ApiService = {
    post: (url, data) => api.post(url, data),
    get: (url) => api.get(url)
}