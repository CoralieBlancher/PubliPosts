import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { fetchCommentsAPI, addCommentAPI } from "../../service/api.service.jsx";


export const fetchComments = createAsyncThunk("comments/fetchComments", async (postId) => {
    return await fetchCommentsAPI(postId);
});

export const addComment = createAsyncThunk("comments/addComment", async (commentData) => {
    return await addCommentAPI(commentData);
});

const commentsSlice = createSlice({
    name: "comments",
    initialState: {
        comments: {},
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchComments.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchComments.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.comments[action.meta.arg] = action.payload;
            })
            .addCase(fetchComments.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(addComment.fulfilled, (state, action) => {
                const postId = action.payload.postId;
                if (state.comments[postId]) {
                    state.comments[postId].push(action.payload);
                } else {
                    state.comments[postId] = [action.payload];
                }
            });
    },
});

export default commentsSlice.reducer;