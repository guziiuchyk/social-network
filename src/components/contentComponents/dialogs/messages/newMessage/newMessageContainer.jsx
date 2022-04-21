import React from 'react';
import './newMessage.css'
import {sendNewMessageCreator, updateNewMessageTextCreator} from "../../../../../redux/reducers/dialogsReducer";
import NewMessage from "./newMessage";


const NewMessageContainer = (props) => {

    let sendMessage = () => {
        props.dispatch(sendNewMessageCreator())
    }

    let OnChangeTextarea = (e) => {
        props.dispatch(updateNewMessageTextCreator(e.target.value));
    };


    return <NewMessage newMessageText={props.dialogsPage.newMessageText} OnChangeTextarea={OnChangeTextarea} sendMessage={sendMessage} />
};

export default NewMessageContainer;