import React from 'react';
import './dialogs.css';
import Messages from "./messages/messages";
import DialogsListContainer from "./dialogsList/dialogsListContainer";

const Dialogs = (props) => {
    return (
        <div className='dialogs'>
            <DialogsListContainer dialogsData={props.dialogsPage.dialogsData}/>
            <Messages dispatch={props.dispatch} dialogsPage={props.dialogsPage} />
        </div>
    );
};

export default Dialogs;
