import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/user.slice";


const store = configureStore({
    reducer : {
        users : userReducer,
    }
});


export default store;