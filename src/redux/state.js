import {rerenderEntireTree} from "../render";

let data = {
    profilePage: {
        postsData : [
            {id: '1', likeCount: '23', text: 'Hello Do you like me?'},
            {id: '2', likeCount: '44', text: 'This my first post!'},
            {id: '3', likeCount: '12', text: 'I\'m learning React'},
            {id: '4', likeCount: '9', text: 'Hello my subscribes'},
        ]
    },
    dialogsPage:{
        dialogsData : [
            {id:'1', name:'Andrey'},
            {id:'2', name:'Nazar'},
            {id:'3', name:'Vasyl'},
            {id:'4', name:'Ivan'},
            {id:'5', name:'Myloka'},
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

};

let getLastId = () => {
    return data.profilePage.postsData[data.profilePage.postsData.length - 1].id
}

let addPost = (postMessage) =>{
    let post = {id:(+getLastId() + 1),likeCount:0, text:postMessage };
    data.profilePage.postsData.push(post)
    rerenderEntireTree(data)
}


export {addPost};
export default data;