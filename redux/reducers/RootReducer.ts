import {combineReducers} from "redux";
import postsReducer from "./PostsReducer";
import postReducer from "./PostReducer";

const rootReducer = combineReducers({
    posts: postsReducer,
    post: postReducer
})

export default rootReducer;