import React from "react";
import "./Post.css";

const Post = ({ post, onClick }) => {
    const handleClick = (e) => {
        e.stopPropagation();
        onClick(post);
    };

    return (
        <div className="post-card" onClick={handleClick}>
            <h2 className="post-title">{post.title}</h2>
            <p className="post-content">{post.content}</p>
        </div>
    );
};

export default Post;
