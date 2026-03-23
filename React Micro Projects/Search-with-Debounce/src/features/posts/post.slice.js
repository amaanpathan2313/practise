import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPost = createAsyncThunk('posts/fetchPost', async() => {

    let response = await fetch ('https://jsonplaceholder.typicode.com/posts');
    return response.json();

}); // fetchPost


const postSlice = createSlice({

    name : "posts",

    initialState : {
        postIsLoading : false,
        postIsError : false,
        postData : []
    },

    extraReducers : (builders) => {

        builders
        .addCase(fetchPost.pending, (state) => {
            console.log("post is loading")
            state.postIsLoading = true;
        })
        .addCase(fetchPost.fulfilled, (state, action) => {
            state.postIsLoading = false;
            // console.log("post is done", action.payload)
            state.postData = action.payload;
        })
        .addCase(fetchPost.rejected, (state) => {
            console.log("post is error")
            state.postIsLoading = false;
            state.postIsError = true;
        })

    }, //  extraReducers

}); // postSlice


export default postSlice.reducer;