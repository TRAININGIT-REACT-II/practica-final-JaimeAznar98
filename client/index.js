import App from "./src/App";
import ReactDOM from "react-dom";
import React from "react";
import "./index.css";

import { Provider } from "react-redux";
import configureAppStore from "./src/redux/configureStore";

const store = configureAppStore({});
// Montamos la aplicación
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("app")
);
