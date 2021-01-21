import {fetchNotes, postNotes} from "../../api/api";
//Action Types
const GET_NOTES = 'blog/GET_NOTES'
const ADD_NOTE = 'blog/ADD_NOTE'

let initialState = {
    posts: []
};

//Reducer
const postsReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_NOTES:
            return {
                ...state,
                posts: [...state.posts, ...action.posts]
            }
        case ADD_NOTE:
            return {
                ...state,
                posts: [...state.posts, {
                    ...action.newMessage
                }]
            }
        default:
            return state;
    }
}

// Action Creators
export const getNotes = (posts) => ({
    type: GET_NOTES,
    posts
})
export const addNote = (title) => ({
    type: ADD_NOTE,
    newMessage: title
})
// Redux Thunk Creator
export const getUsersTC = () => async (dispatch) => {
    const payload = await fetchNotes()
    dispatch(getNotes(payload));
}
export const postUsersTC = (title, body) => async (dispatch) => {
    const payload = await postNotes(title, body)
    dispatch(addNote(payload));
}


export default postsReducer;