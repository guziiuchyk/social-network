import React from 'react';
import './dialogs.css';
import DialogsList from "./dialogsList/dialogsList";
import Messages from "./messages/messages";

const Dialogs = (props) => {
    return (
        <div className='dialogs'>
            <DialogsList dialogsData={props.dialogsPage.dialogsData}/>
            <Messages messageData={props.dialogsPage.messageData} />
        </div>
    );
};

export default Dialogs;
