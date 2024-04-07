import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

let rootElement = document.getElementById("root");

if(!rootElement) {
    document.body.innerHTML = '<div id="root"></div>';
    rootElement = document.getElementById("root") as HTMLElement;
}

const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);