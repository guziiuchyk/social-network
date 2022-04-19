

let store = {
    _data : {
        _setTextareaText(text){
            this.profilePage.textareaText = text;
        },
        profilePage: {
            postsData : [
                {id: '1', likeCount: '23', text: 'Hello Do you like me?'},
                {id: '2', likeCount: '44', text: 'This my first post!'},
                {id: '3', likeCount: '12', text: 'I\'m learning React'},
                {id: '4', likeCount: '9', text: 'Hello my subscribes'},
            ],
            textareaText:''
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
        }

    },
    getData(){
        return this._data
    },

    getLastPostId () {
        return this._data.profilePage.postsData[this._data.profilePage.postsData.length - 1].id
    },
    subscribe (observer) {
       this.rerenderEntireTree = observer;
    },
    dispatch(action){
        if(action.type === 'ADD-POST'){
            let post = {id:(Number(this.getLastPostId) + 1),likeCount:'0', text:this._data.profilePage.textareaText };
            this._data.profilePage.postsData.push(post)
            this.rerenderEntireTree(this.data)
            this.dispatch({type:'UPDATE-NEW-POST-TEXT', textareaText: ''})
        } else if(action.type === 'UPDATE-NEW-POST-TEXT'){

            this._data._setTextareaText(action.textareaText);
            this.rerenderEntireTree(this._data);
        }
    }
}

export let AddPostActoinCreator = () => {
    return {type:'ADD-POST'}
};

export let onTextareaChangeActionCreator = (text) => {
    return {type:'UPDATE-NEW-POST-TEXT',textareaText:text}
}


export default store







