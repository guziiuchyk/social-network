import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {addPost} from "./redux/state";

export let rerenderEntireTree = (data) => {
    ReactDOM.render(
        <React.StrictMode>
            <App data={data} addPost={addPost} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
