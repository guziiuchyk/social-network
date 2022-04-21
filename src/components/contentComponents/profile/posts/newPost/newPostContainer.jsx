import React from 'react';
import './newPost.css';
import {AddPostCreator, updateNewPostTextCreator} from "../../../../../redux/reducers/profileReducer";
import NewPost from "./newPost";

const NewPostContainer = (props) => {

    let addPost = () => {
        props.dispatch(AddPostCreator());

    }

    let onTextareaChange = (e) => {

        props.dispatch(updateNewPostTextCreator(e.target.value));

    };

    return (
        <NewPost textareaNewText={props.textareaText} addPost={addPost} onTextareaChange={onTextareaChange} />
    );

};

export default NewPostContainer;