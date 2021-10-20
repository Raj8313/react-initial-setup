import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import productMiddleware from "../middleware/productMiddleware";
import rootReducer from "../reducers";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(productMiddleware))
);

export default store;
