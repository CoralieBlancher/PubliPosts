import React from "react";
import { Link } from "react-router";
import { useSelector } from "react-redux";

import { selectAllUsers } from "../../store/selector/selector.js";

import "./style.css";


const Post = ({ post }) => {
    const users = useSelector(selectAllUsers);
    const author = users.find((user) => user.id === post.userId);

    return (
        <div className="post-card">
            <h3>{post.title}</h3>
            <h4>Posté par : {author ? author.name : "Inconnu"}</h4>
            <p>{post.body.substring(0, 100)}...</p>
            <Link to={`/post/${post.id}`}>Lire la suite</Link>
        </div>
    );
};

export default Post;