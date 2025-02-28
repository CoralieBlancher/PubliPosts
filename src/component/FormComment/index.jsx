import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addComment } from "../../store/slice/commentsSlice";

const FormComment = ({ postId }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim() && email.trim() && body.trim()) {
            dispatch(addComment({ postId, name, email, body }));
            setName("");
            setEmail("");
            setBody("");
        }
    };

    return (
        <form className="form-comment" onSubmit={handleSubmit}>
            <h3>Ajouter un Commentaire</h3>
            <input
                type="text"
                placeholder="Nom"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
                placeholder="Commentaire"
                value={body}
                onChange={(e) => setBody(e.target.value)}
            ></textarea>
            <button type="submit">Publier</button>
        </form>
    );
};

export default FormComment;