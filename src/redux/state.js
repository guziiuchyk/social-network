const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';

let store = {
    _data : {
        _setTextareaText(text){
            this.profilePage.NewPostText = text;
        },
        profilePage: {
            postsData : [
                {id: '1', likeCount: '23', text: 'Hello Do you like me?'},
                {id: '2', likeCount: '44', text: 'This my first post!'},
                {id: '3', likeCount: '12', text: 'I\'m learning React'},
                {id: '4', likeCount: '9', text: 'Hello my subscribes'},
            ],
            NewPostText:''
        },
        dialogsPage:{
            dialogsData : [
                {id:'1', name:'Andrey'},
                {id:'2', name:'Nazar'},
                {id:'3', name:'Vasyl'},
                {id:'4', name:'Ivan'},
                {id:'5', name:'Mykola'},
                {id:'6', name:'Oleg'},
            ],
            messageData : [
                {id:'1', sender:'You',text:'hello'},
                {id:'2', sender:'Nazar',text:'hello'},
                {id:'3', sender:'You',text:'hello'},
                {id:'4', sender:'Nazar',text:'hello'},
                {id:'5', sender:'You',text:'hello'},

            ],
            newMessageText:'',
        }

    },
    getData(){
        return this._data
    },

    getLastId (obj) {
        return obj[obj.length - 1].id
    },
    subscribe (observer) {
       this.rerenderEntireTree = observer;
    },
    dispatch(action){
        if(action.type === ADD_POST){
            let post = {id:(Number(this.getLastId(this._data.profilePage.postsData)) + 1),likeCount:'0', text:this._data.profilePage.NewPostText };
            this._data.profilePage.postsData.push(post)
            this.rerenderEntireTree(this.data)
            this.dispatch(updateNewPostTextCreator(''))
        }

        else if(action.type === UPDATE_NEW_POST_TEXT){
            this._data._setTextareaText(action.textareaText);
            this.rerenderEntireTree(this._data);
        }

        else if (action.type === UPDATE_NEW_MESSAGE_TEXT){
            this._data.dialogsPage.newMessageText = action.textareaText
            this.rerenderEntireTree(this._data)
        }

        else if(action.type === SEND_NEW_MESSAGE){
            let message = {id:(Number(this.getLastId(this._data.dialogsPage.messageData)) + 1),sender:'You',text: this._data.dialogsPage.newMessageText}
            this._data.dialogsPage.messageData.push(message);
            this.dispatch(updateNewMessageTextCreator(''));
            this.rerenderEntireTree(this._data);
        }

    }
}

export const  sendNewMessageCreator = ( (text, sender) => ({type:SEND_NEW_MESSAGE,textareaText:text,sender:sender}))

export const updateNewMessageTextCreator = (text) => ({type:UPDATE_NEW_MESSAGE_TEXT,textareaText: text})

export const AddPostCreator = () => ({type:ADD_POST})

export const updateNewPostTextCreator = (text) => ({type:UPDATE_NEW_POST_TEXT,textareaText:text})

export default store







