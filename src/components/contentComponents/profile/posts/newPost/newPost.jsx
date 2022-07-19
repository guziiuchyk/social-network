import React from 'react';
import './newPost.css';

const NewPost = (props) => {

    return (
        <div className="profile__create-post">
            <div className="profile__create-post__title">MyPosts</div>
            <textarea onChange={props.onTextareaChange} value={props.textareaNewText}  placeholder="New Post" className='profile__create-post__text-area' name="post" id="1" cols="30" rows="10"></textarea>
            <div onClick={props.addPost} className="profile__create-post__button button">Send</div>
        </div>
    );
};

export default NewPost;