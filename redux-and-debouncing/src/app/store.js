import { configureStore } from "@reduxjs/toolkit";
// const postReducer from '../../features/fetch/fetch.slice.js'
import  postReducer  from "../features/fetch/fetch.slice";


const store = configureStore({
    reducer : {
        postData : postReducer
    }
});

export default store;