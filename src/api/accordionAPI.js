import {api} from "./axios";

export const getAccordions = async () => {
    return await api.get("/faq/").then(res=>res.data)
}