import ReactDOM from "react-dom/client";
import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { App } from "./components/App";
import { reducers } from "./reducers";

const store = createStore(reducers, applyMiddleware(thunk));

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el!);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
