import React from 'react';
import Message from "./message/message";
import './messages.css'

const Messages = (props) => {
    let messagesElements = props.messageData
        .map(message => <Message sender={message.sender} text={message.text}/>);

    let textArea = React.createRef();
    let sendMessage = () => {
        alert(textArea.current.value);
    }

    return (
        <div className="messages">
            <div className="messagesElements">
                {messagesElements}
            </div>
            <div className="createNewMessage">
                <textarea  ref={textArea} className='messages__textarea' ></textarea>
                <div onClick={sendMessage} className="createNewMessage__send"></div>
            </div>
        </div>
    );
};

export default Messages;

