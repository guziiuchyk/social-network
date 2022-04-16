import React from 'react';
import './dialogsList.css'
import Dialog from "./dialog/dialog";

const DialogsList = (props) => {
    let dialogsElements = props.dialogsData
        .map(dialog => <Dialog id={dialog.id} name={dialog.name}/>);
    return (
            <div className="dialogsList">
                {dialogsElements}
            </div>
    );
};

export default DialogsList;