import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todo.slice'
import userReducer from '../features/users/users.slice'



const store = configureStore({
    reducer : {
        todoList : todoReducer,
        users : userReducer
    }
});

export default store;