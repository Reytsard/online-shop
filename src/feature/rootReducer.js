import { combineReducers } from "redux";
import storeReducer from "./storeSlice";

const rootReducer = combineReducers({
  store: storeReducer,
});

export default rootReducer;
