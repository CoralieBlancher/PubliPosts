import React from "react";

import "./style.css";

const Comment = ({ comment }) => {
    return (
        <div className="comment-card">
            <h4>{comment.name}</h4>
            <p>{comment.body}</p>
            <small>{comment.email}</small>
        </div>
    );
};

export default Comment;