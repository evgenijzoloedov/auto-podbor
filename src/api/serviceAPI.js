import {api} from "./axios";

export const getServices = async () => {
    return await api.get("/service/").then(res=>res.data)
}

export const getService = async (id) => {
    return await api.get(`/service/${id}/`,).then(res=>res.data)
}