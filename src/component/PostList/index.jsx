import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchPosts } from "../../store/slice/postsSlice.js";
import { selectAllPosts, selectPostsStatus, selectPostsError } from "../../store/selector/selector.js";
import Post from "../Post";
import { fetchUsers } from "../../store/slice/usersSlice.js";


const PostList = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectAllPosts);
    const status = useSelector(selectPostsStatus);
    const error = useSelector(selectPostsError);

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchPosts());
            dispatch(fetchUsers()); // Charger les utilisateurs au début
        }
    }, [status, dispatch]);

    if (status === "loading") {
        return <p>Chargement des posts...</p>;
    }

    if (status === "failed") {
        return <p>Erreur : {error}</p>;
    }

    return (
        <div>
            <h2>Liste des Posts</h2>
            {posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
};

export default PostList;