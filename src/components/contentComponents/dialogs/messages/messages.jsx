import React from 'react';
import Message from "./message/message";
import './messages.css'

const Messages = (props) => {
    let messagesElements = props.messageData
        .map(message => <Message sender={message.sender} text={message.text}/>)
    return (
        <div className="messages">
            <div className="messagesElements">
                {messagesElements}
            </div>
            <div className="createNewMessage">
                <textarea className='messages__textarea' ></textarea>
                <div className="createNewMessage__send"></div>
            </div>
        </div>
    );
};

export default Messages;

