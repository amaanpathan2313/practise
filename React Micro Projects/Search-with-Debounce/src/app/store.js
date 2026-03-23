import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/users/user.slice";
import postSlice from "../features/posts/post.slice"

const store = configureStore({
  reducer: {
    users: userSlice,
    posts : postSlice
  },
});

export default store;
