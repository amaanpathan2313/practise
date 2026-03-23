import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/users/user.slice";

const store = configureStore({
  reducer: {
    users: userSlice,
  },
});

export default store;
