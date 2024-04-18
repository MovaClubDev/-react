
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";


import "./styles.css";

import store from './state/store';
import App from "./App.jsx";

let rootElement = document.getElementById("root");

if(!rootElement) {
    document.body.innerHTML = '<div id="root"></div>';
    rootElement = document.getElementById("root");
}

const root = createRoot(rootElement);
root.render(
    <Provider store={store}>
      <App />
    </Provider>
);