import {api} from "./axios";

export const postFeedback = (body) => {
    return api.post('/feedback/',body).then(res=>res.data)
}