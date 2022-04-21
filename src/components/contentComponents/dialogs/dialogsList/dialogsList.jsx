import React from 'react';
import './dialogsList.css'

const DialogsList = (props) => {
    return (
            <div className="dialogsList">
                {props.dialogsElements}
            </div>

    );
};

export default DialogsList;