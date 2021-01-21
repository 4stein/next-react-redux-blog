import axios from "axios";

const url = 'https://simple-blog-api.crew.red';

export const fetchNotes = async () => {

    const result = await axios.get(`${url}/posts`)
    const payload = result.data.map(post => {
        return {
            ...post
        }
    })
    return payload
}



export const postNotes = async (title: string, body: string) => {
    const note = {
        title, body
    }
    try {
        const result = await axios.post(`${url}/posts`, note)
        const payload = {
            ...note,
            id: result.data.id
        }
        return payload
    } catch (e) {
        throw new Error(e.messages)
    }
}

export const postComments = async (id: string, body: string) => {
    const comment = {
        postId: id, body
    }
    try {
        const result = await axios.post(`${url}/comments`, comment)
        const payload = {
            ...comment
        }
        return payload
    } catch (e) {
        throw new Error(e.messages)
    }
}

export const fetchPost = async (id: string) => {
    const result = await axios.get(`${url}/posts/${id}?_embed=comments`)
    const payload = result.data.comments.map(post => {
        return {
            ...post
        }
    })
    return payload
}