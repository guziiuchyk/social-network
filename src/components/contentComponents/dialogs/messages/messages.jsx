import React from 'react';
import Message from "./message/message";
import './messages.css'
import NewMessage from "./newMessage/newMessage";

const Messages = (props) => {
    let messagesElements = props.dialogsPage.messageData
        .map(message => <Message sender={message.sender} text={message.text}/>);

    return (
        <div className="messages">
            <div className="messagesElements">
                {messagesElements}
            </div>
            <NewMessage dialogsPage={props.dialogsPage} dispatch={props.dispatch} />
        </div>
    );
};

export default Messages;

