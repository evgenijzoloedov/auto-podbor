import {api} from "./axios";


export const getWorkExamples = async (page=1,objectCount = 4) => {
    return await api.get("/work_example/",{
        params:{
            page,
            objectCount
        }
    }).then(res=>res.data)
}


export const getBlogPost = async (id) => {
    return await api.get(`/work_example/${id}`).then(res=>res.data)
}


