
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import store from "./redux/state";

let rerenderEntireTree = () => {
        root.render(<App dispatch={store.dispatch.bind(store)}  data={store.getData()}/>)
};

const root = ReactDOM.createRoot(document.getElementById('root'))

rerenderEntireTree();
store.subscribe(rerenderEntireTree)

reportWebVitals();
