import { configureStore } from "@reduxjs/toolkit";

import postsReducer from "./slice/postsSlice.js";
import commentsReducer from "./slice/commentsSlice.js";
import usersReducer from "./slice/usersSlice.js";

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        comments: commentsReducer,
        users: usersReducer,
    },
});