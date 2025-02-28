import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import { fetchComments } from "../../store/slice/commentsSlice.js";
import { selectCommentsByPostId, selectCommentsStatus, selectPostById } from "../../store/selector/selector.js";
import ListeComment from "../../component/ListeComment";
import FormComment from "../../component/FormComment";

import "./style.css";

const PostDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const post = useSelector(selectPostById(Number(id)));
    const comments = useSelector(selectCommentsByPostId(Number(id)));
    const commentsStatus = useSelector(selectCommentsStatus);

    useEffect(() => {
        if (commentsStatus === "idle") {
            dispatch(fetchComments(id));
        }
    }, [commentsStatus, dispatch, id]);

    if (!post) {
        return <p>Post introuvable...</p>;
    }

    return (
        <div className="post-detail-container">
            <div className="post-detail">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
            <FormComment postId={post.id} />
            <h3>Commentaires</h3>
            <ListeComment comments={comments} />
        </div>
    );
};

export default PostDetail;
