import React from "react";
import ReactDOM from "react-dom";
import "./css/bootstrap.min.css";
import "./index.css";
import bootstrap from "bootstrap";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
