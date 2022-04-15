import React from 'react';
import {NavLink} from "react-router-dom";
import './dialog.css'

const Dialog = (props) => {
    return (
            <NavLink className='dialogList__item' to={`/dialogs/${props.id}`} >{props.name}</NavLink>
    );
};

export default Dialog;