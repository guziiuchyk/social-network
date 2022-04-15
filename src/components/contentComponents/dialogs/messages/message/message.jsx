import React from 'react';
import './message.css';

const Message = (props) => {
    return (
        <div className='message'>
            <div>
                <div className="message__avatar"></div>
                <div className="message__sender">{props.sender}</div>
            </div>
            <div className="message__text">{props.text}</div>
        </div>
    );
};

export default Message;