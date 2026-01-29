

import { createAsyncThunk, createSlice }  from "@reduxjs/toolkit";

export const fetchPost = createAsyncThunk('fetch/fetchPost', async() => {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await response.json();

}); // fetchPost

const postSlice = createSlice({
    name : 'all_posts',
    initialState : {
        isLoading : false,
        isError : false,
        data : []
    },

    extraReducers : (builder) => {
        builder
        .addCase(fetchPost.pending, (state) => {
             state.isLoading= true;
              state.isError = false;
              state.data = [];
        })
        .addCase(fetchPost.fulfilled, (state, action) => {
             state.isLoading= false;
             state.data = action.payload;
        })
        .addCase(fetchPost.rejected, (state, action) => {
            console.log(`API Error : ${action.payload}`)
             state.isLoading= false;
             state.isError = true;
             state.data = [];
        })
    }
});

export default postSlice.reducer;

