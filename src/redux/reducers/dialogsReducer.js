const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';

let initialState = {
    dialogsData: [
        {id: '1', name: 'Andrey'},
        {id: '2', name: 'Nazar'},
        {id: '3', name: 'Vasyl'},
        {id: '4', name: 'Ivan'},
        {id: '5', name: 'Mykola'},
        {id: '6', name: 'Oleg'},
    ],
    messageData: [
        {id: '1', sender: 'You', text: 'hello'},
        {id: '2', sender: 'Nazar', text: 'hello'},
        {id: '3', sender: 'You', text: 'hello'},
        {id: '4', sender: 'Nazar', text: 'hello'},
        {id: '5', sender: 'You', text: 'hello'},

    ],
    newMessageText: '',
}

let dialogsReducer = (state = initialState, action) => {
    let getLastId = (obj) => {
        return obj[obj.length - 1].id
    }
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.textareaText
            return state;
        case SEND_NEW_MESSAGE:
            let message = {
                id: (Number(getLastId(state.messageData)) + 1),
                sender: 'You',
                text: state.newMessageText
            }
            state.messageData.push(message);
            state.newMessageText = '';
            return state;
        default:
            return state
    }
};

export default dialogsReducer;
export const sendNewMessageCreator = ((text, sender) => ({type: SEND_NEW_MESSAGE, textareaText: text, sender: sender}))
export const updateNewMessageTextCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, textareaText: text})
