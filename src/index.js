import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { dashboardReducer } from "./Redux/Reducer";
import App from "./App";
import "./App.css";

const store = createStore(dashboardReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
