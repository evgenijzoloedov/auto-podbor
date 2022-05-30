import {api} from "./axios";


export const getBlogPosts = async (page=1,objectCount = 5) => {
    return await api.get("/blog/",{
        params:{
            page,
            objectCount
        }
    }).then(res=>res.data)
}


export const getBlogPost = (id) => {
    return api.get(`/blog/${id}/`).then(res=>res.data)
}


