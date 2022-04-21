import React from 'react';
import './dialogsList.css'
import Dialog from "./dialog/dialog";
import DialogsList from "./dialogsList";

const dialogsListContainer = (props) => {
    let dialogsElements = props.dialogsData
        .map(dialog => <Dialog id={dialog.id} name={dialog.name}/>);
    return <DialogsList dialogsElements={dialogsElements} />;
};

export default dialogsListContainer;