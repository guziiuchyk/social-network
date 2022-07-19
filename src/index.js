import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import store from "./redux/reduxStore";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

let rerenderEntireTree = () => {
    root.render(
        <BrowserRouter>
            <Provider store={store}>
                <App dispatch={store.dispatch.bind(store)} data={store.getState()}/>
            </Provider>
        </BrowserRouter>
    )
};

const root = ReactDOM.createRoot(document.getElementById('root'))

rerenderEntireTree();
store.subscribe(rerenderEntireTree)

reportWebVitals();
