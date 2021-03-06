import React from "react";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import Store from "./redux/store/store";
import { createRoot } from "react-dom/client";


let store = Store();

const container = document.getElementById("root");
// @ts-ignore
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
