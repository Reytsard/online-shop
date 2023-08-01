import { combineReducers } from "redux";
import storeReducer from "./storeSlice";

export const rootReducer = combineReducers({
  stores: storeReducer,
});
