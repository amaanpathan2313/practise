import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    myTodo: [],
  },

  reducers: {
    addTodo: (state, action) => {
      // console.log(action.payload)
      state.myTodo.push(action.payload);
    },
    removeTodo: (state, action) => {
       
       state.myTodo = state.myTodo.filter((ele) => ele.id != action.payload);
       
    },
    statusTodo: (state, action) => {
      const todo = state.myTodo.find((ele) => ele.id === action.payload);

      if (todo) {
        todo.status = true;
      }
    },
  },
}); // todoSlice

export const { addTodo, removeTodo, statusTodo } = todoSlice.actions;

export default todoSlice.reducer;
