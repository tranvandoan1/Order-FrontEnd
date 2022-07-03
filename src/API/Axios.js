import axios from "axios";

export const axiosClient = axios.create({
    baseURL: "https://order-back.vercel.app/api",
    headers: {
        "Content-Type": "application/json",
    },
});