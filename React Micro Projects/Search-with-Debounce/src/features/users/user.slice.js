import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
});

const userSlice = createSlice({
  name: "users",

  initialState: {
    isLoading: false,
    isError: false,
    data: [],
  },

  extraReducers: (builders) => {
    builders
    .addCase(fetchUsers.pending, (state) => {
        console.log("I am in Loading")
        state.isLoading = true;
    })
    .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        console.log("I am in success")
    })
    .addCase(fetchUsers.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        console.log("I am in error")
      });
  },
}); // userSlice

export default userSlice.reducer;
