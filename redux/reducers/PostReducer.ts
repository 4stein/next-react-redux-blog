//Action Types
import {fetchPost, postComments} from "../../api/api";

const GET_POST = 'post/GET_POST'
const ADD_COMMENT = 'post/ADD_COMMENT'

let initialState = {
    post: []
};

//Reducer
const postReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_POST:
            return {
                ...state,
                    post: [...state.post, ...action.post]
            }
        case ADD_COMMENT:
            return {
                ...state,
                post: [...state.post, {
                    ...action.newPost
                }]
            }
        default:
            return state;
    }
}

// Action Creators
export const getPost = (post) => ({
    type: GET_POST,
    post
})
export const addComment = (post) => ({
    type: ADD_COMMENT,
    newPost: post
})
export const getPostTC = (id) => async (dispatch) => {
    const payload = await fetchPost(id)
    dispatch(getPost(payload));
}
export const postCommentTC = (id, body) => async (dispatch) => {
    const payload = await postComments(id, body)
    dispatch(addComment(payload));
}

export default postReducer;