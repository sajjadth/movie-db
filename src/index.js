import ReactDOM from "react-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style.scss";
import App from "./app";
import { store } from "./reducer";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
