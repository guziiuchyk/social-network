const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [
        {id: '1', likeCount: '23', text: 'Hello Do you like me?'},
        {id: '2', likeCount: '44', text: 'This my first post!'},
        {id: '3', likeCount: '12', text: 'I\'m learning React'},
        {id: '4', likeCount: '9', text: 'Hello my subscribes'},
    ],
    NewPostText: ''
}

export let profileReducer = (state = initialState, action) => {
    let getLastId = (obj) => {
        return obj[obj.length - 1].id
    }
    switch (action.type) {
        case ADD_POST:
            let post = {
                id: (Number(getLastId(state.postsData)) + 1),
                likeCount: '0',
                text: state.NewPostText
            };
            state.postsData.push(post)
            state.NewPostText = '';
            return state
        case UPDATE_NEW_POST_TEXT:
            state.NewPostText = action.textareaText;

            return state;
        default: {
            return state
        }
    }

};

export default profileReducer
export const AddPostCreator = () => ({type: ADD_POST})
export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, textareaText: text})