import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchUsers = createAsyncThunk('users/fetchUsers', async() => {

    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return response.json();

}); // fetchUsers

const userSlice = createSlice({

    name : 'users',
    initialState : {
        data : [],
        isLoading : false,
        isError : false
    },

    extraReducers : (builder) => {
        builder
        .addCase(fetchUsers.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        .addCase(fetchUsers.rejected, (state, payload) => {
            state.isLoading = false;
            state.isError = true;
        })
    }

}); // userSlice

export default userSlice.reducer;