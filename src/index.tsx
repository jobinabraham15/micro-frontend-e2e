import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

declare global {
  interface Window {
    renderE2E: (root: any, containerId: string, history?: any) => void;
    unmountE2E: (root: any, containerId: string) => void;
  }
}

window.renderE2E = (root, containerId, history) => {
  ReactDOM.render(<App history={history} />, root.getElementById(containerId));
};

if (process.env.NODE_ENV === "development") {
  window.renderE2E(window.document, "root");
}

window.unmountE2E = (root, containerId) => {
  ReactDOM.unmountComponentAtNode(root.getElementById(containerId));
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
