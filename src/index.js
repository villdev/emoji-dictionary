import React from "react";
import { render } from "react-dom";

import App from "./app";

const rootElement = document.getElementById("root");

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
