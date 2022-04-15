import React from 'react';
import Message from "./message/message";
import './messages.css'

const Messages = () => {
    let messageData = [
        {id:'1', sender:'You',text:'hello'},
        {id:'2', sender:'Nazar',text:'hello'},
        {id:'3', sender:'You',text:'hello'},
        {id:'4', sender:'Nazar',text:'hello'},
        {id:'5', sender:'You',text:'hello'}
    ]
    let messagesElements = messageData
        .map(message => <Message sender={message.sender} text={message.text} />)
    return (
        <div className="messages">
            {messagesElements}
        </div>
    );
};

export default Messages;

