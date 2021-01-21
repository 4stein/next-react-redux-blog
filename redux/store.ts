import {applyMiddleware, createStore} from "redux";
import thunkMiddleWere from "redux-thunk";
import rootReducer from "./reducers/RootReducer";

let store = createStore(rootReducer, applyMiddleware(thunkMiddleWere));

export default store;
