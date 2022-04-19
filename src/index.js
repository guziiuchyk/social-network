import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import store from "./redux/state";
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = () => {
    root.render(
        <BrowserRouter>
        <App dispatch={store.dispatch.bind(store)} data={store.getData()}/>
        </BrowserRouter>
    )
};

const root = ReactDOM.createRoot(document.getElementById('root'))

rerenderEntireTree();
store.subscribe(rerenderEntireTree)

reportWebVitals();
