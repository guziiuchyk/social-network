import React from 'react';
import './newPost.css';

const NewPost = () => {
    return (
        <div className="profile__create-post">
            <div className="profile__create-post__title">MyPosts</div>
            <textarea placeholder="New Post" className='profile__create-post__text-area' name="post" id="1" cols="30" rows="10"></textarea>
            <div className="profile__create-post__button button">Send</div>
        </div>
    );
};

export default NewPost;