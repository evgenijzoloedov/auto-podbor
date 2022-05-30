import {api} from "./axios";

export const getCompanyInfo = async () => {
    return await api.get("/company_info/").then(res=>res.data)
}