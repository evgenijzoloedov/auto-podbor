import axios from "axios";


export const api = axios.create({
    baseURL:"http://80.78.247.91/api/",
    headers:{
        "Content-Type": "application/json"
    }
})