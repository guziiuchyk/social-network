import React from 'react';
import './post.css'

const Post = (props) => {
    return (
        <div>
            <div className="profile__post">
                <div className="post__img"></div>
                <div className='post__text'>{props.text}</div>
            </div>
            <div className="like">{`${props.likeCount} likes`}</div>
        </div>
    );
};

export default Post;