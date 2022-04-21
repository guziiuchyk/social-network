import React from 'react';
import './newMessage.css'


const NewMessage = (props) => {
    return (
        <div className="createNewMessage">
            <textarea onChange={props.OnChangeTextarea} value={props.newMessageText} className='messages__textarea' ></textarea>
            <div onClick={props.sendMessage} className="createNewMessage__send"></div>
        </div>
    );
};

export default NewMessage;