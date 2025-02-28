import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addPost } from "../../store/slice/postsSlice.js";

import "./style.css";

const FormPost = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim() && body.trim()) {
            dispatch(addPost({ title, body }));
            setTitle("");
            setBody("");
        }
    };

    return (
        <form className="form-post" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Titre"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Contenu"
                value={body}
                onChange={(e) => setBody(e.target.value)}
            ></textarea>
            <button type="submit">Publier</button>
        </form>
    );
};

export default FormPost;