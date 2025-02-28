import React from "react";

import Comment from "../Comment";

const ListeComment = ({ comments }) => {
    if (!comments || comments.length === 0) {
        return <p>Aucun commentaire pour ce post.</p>;
    }

    return (
        <div className="comments-list">
            {comments.map((comment) => (
                <Comment key={comment.id} comment={comment} />
            ))}
        </div>
    );
};

export default ListeComment;