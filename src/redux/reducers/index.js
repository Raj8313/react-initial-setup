import { combineReducers } from "redux";
import productReducer from "./productReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  productReducer,
  userReducer,
});

export default rootReducer;
