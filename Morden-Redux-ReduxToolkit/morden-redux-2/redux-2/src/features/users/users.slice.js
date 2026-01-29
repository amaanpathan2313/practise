import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchUser = createAsyncThunk('users/fetchUser', async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    return response.json();
}); // fetchUser

const userSlice = createSlice({

    name : "users",
    initialState : {
        isLoading : false,
        isError : false,
        data : []
    },

    extraReducers: (builders) => {   //  createAsyncThunk It automatically create reducers
        builders
        .addCase(fetchUser.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        .addCase(fetchUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.data = [];
            // console.log(action.payload.message)
        })
    }

}); // userSlice

export default userSlice.reducer;