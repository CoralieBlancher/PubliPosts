import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { fetchPostsAPI, addPostAPI } from "../../service/api.service.jsx";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  return await fetchPostsAPI();
});

export const addPost = createAsyncThunk("posts/addPost", async (postData) => {
  return await addPostAPI(postData);
});

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      });
  },
});

export default postsSlice.reducer;