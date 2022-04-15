import React from 'react';
import './dialogs.css';
import DialogsList from "./dialogsList/dialogsList";
import Messages from "./messages/messages";

const Dialogs = () => {
    return (
        <div className='dialogs'>
            <DialogsList />
            <Messages />
        </div>
    );
};

export default Dialogs;
