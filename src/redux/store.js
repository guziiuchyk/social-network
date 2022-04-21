import profileReducer from "./reducers/profileReducer";
import dialogsReducer from "./reducers/dialogsReducer";

let store = {
    _data: {
        _setTextareaText(text) {
            this.profilePage.NewPostText = text;
        },
        profilePage: {
            postsData: [
                {id: '1', likeCount: '23', text: 'Hello Do you like me?'},
                {id: '2', likeCount: '44', text: 'This my first post!'},
                {id: '3', likeCount: '12', text: 'I\'m learning React'},
                {id: '4', likeCount: '9', text: 'Hello my subscribes'},
            ],
            NewPostText: ''
        },
        dialogsPage: {
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

    },
    getData() {
        return this._data
    },


    subscribe(observer) {
        this.rerenderEntireTree = observer;
    },
    dispatch(action) {
        this._data.profilePage = profileReducer(this._data.profilePage,action);
        this._data.dialogsPage = dialogsReducer(this._data.dialogsPage,action);
        this.rerenderEntireTree(this._data)
    }
}




export default store







