import React from 'react';
import './dialogsList.css'
import Dialog from "./dialog/dialog";

const DialogsList = () => {
    let dialogsData = [
        {id:'1', name:'Andrey'},
        {id:'2', name:'Nazar'},
        {id:'3', name:'Vasyl'},
        {id:'4', name:'Ivan'},
        {id:'5', name:'Myloka'},
        {id:'6', name:'Oleg'},
    ]
    let dialogsElements = dialogsData
        .map(dialog => <Dialog id={dialog.id} name={dialog.name}/>);
    return (
            <div className="dialogsList">
                {dialogsElements}
            </div>
    );
};

export default DialogsList;