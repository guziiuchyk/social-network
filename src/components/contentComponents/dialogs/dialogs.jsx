import React from 'react';
import './dialogs.css';
import DialogsListContainer from "./dialogsList/dialogsListContainer";
import MessagesContainer from "./messages/messagesContainer";

const Dialogs = (props) => {
    return (
        <div className='dialogs'>
            <DialogsListContainer dialogsData={props.dialogsPage.dialogsData}/>
            <MessagesContainer dispatch={props.dispatch} dialogsPage={props.dialogsPage} />
        </div>
    );
};

export default Dialogs;
