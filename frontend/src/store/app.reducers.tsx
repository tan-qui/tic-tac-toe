import { combineReducers } from "redux";
import { common } from "./common/common.reducers";
export default combineReducers({
  commonReducer: common,
});
