import { createBrowserHistory as createHistory } from "history";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./app.reducers";
export const history = createHistory();
const initialState = {};
const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
export default store;
