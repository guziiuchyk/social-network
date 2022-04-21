import React from 'react';
import './posts.css'

const Posts = (props) => {
    return (
        <div>
            {props.postsElements}
        </div>
    );
};

export default Posts;