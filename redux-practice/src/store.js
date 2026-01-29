import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/count.slice"


const store = configureStore({
    reducer : {
        counter : counterReducer
    }
});

export default store;