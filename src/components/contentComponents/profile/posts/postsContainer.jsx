import React from 'react';
import './posts.css'
import Post from "./post/post";
import Posts from "./posts";

const postsContainer = (props) => {
    let postsElements = props.postsData
        .map(post => <Post likeCount={post.likeCount} text={post.text}/>);
    return <Posts postsElements={postsElements} />;
};

export default postsContainer;