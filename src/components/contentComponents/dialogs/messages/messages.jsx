import React from 'react';
import Message from "./message/message";
import './messages.css'

const Messages = (props) => {
    let messagesElements = props.messageData
        .map(message => <Message sender={message.sender} text={message.text} />)
    return (
        <div className="messages">
            {messagesElements}
        </div>
    );
};

export default Messages;

