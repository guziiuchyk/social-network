import React from 'react';
import './posts.css'
import Post from "./post/post";

const Posts = (props) => {
    let postsElements = props.postsData
        .map(post => <Post likeCount={post.likeCount} text={post.text}/>);
    return (
        <div>
            {postsElements}
        </div>
    );
};

export default Posts;