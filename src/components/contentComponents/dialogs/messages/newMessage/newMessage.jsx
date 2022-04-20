import React from 'react';
import './newMessage.css'
import {sendNewMessageCreator, updateNewMessageTextCreator} from "../../../../../redux/state";


const NewMessage = (props) => {

    let sendMessage = () => {
        props.dispatch(sendNewMessageCreator())
    }

    let OnChangeTextarea = (e) => {
        props.dispatch(updateNewMessageTextCreator(e.target.value));
    };

    return (
        <div className="createNewMessage">
            <textarea onChange={OnChangeTextarea} value={props.dialogsPage.newMessageText} className='messages__textarea' ></textarea>
            <div onClick={sendMessage} className="createNewMessage__send"></div>
        </div>
    );
};

export default NewMessage;