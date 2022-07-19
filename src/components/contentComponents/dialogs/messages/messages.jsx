import React from 'react';
import './messages.css'
import NewMessageContainer from "./newMessage/newMessageContainer";

const Messages = (props) => {
    return (
        <div className="messages">
            <div className="messagesElements">
                {props.messagesElements}
            </div>
            <NewMessageContainer dialogsPage={props.dialogsPage} dispatch={props.dispatch} />
        </div>
    );
};

export default Messages;

