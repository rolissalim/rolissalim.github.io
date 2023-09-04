import React from "react";
import ReactDOM from "react-dom/client";

import App from "./app/App";

import "./index.scss";
import '../i18n';


const root = ReactDOM.createRoot((document.getElementById("root") as any))
root.render(
    <App />
);