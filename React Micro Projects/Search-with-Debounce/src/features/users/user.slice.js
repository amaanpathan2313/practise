
import { createAsyncThunk, createSlice} from '@reduxjs/toolkit'

export const fetchUsers = createAsyncThunk('users/fetchUsers', async() => {

    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    return response.json();


}); // fetchUsers

const userSlice = createSlice({

  name: "users",

  initialState: {
    isLoading: false,
    isError: false,
    data: [],
  },


  extraReducers: (builders) => { //   createAsyncThunk It automatically create reducers

    builders.
    addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
        console.log("Now I am in Pending State")
    })
    .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false,
        console.log("Now I am in filefield State")
        state.data = action.payload
    })
    .addCase(fetchUsers.rejected, (state) => {
        state.isLoading = false,
        console.log("Now I am in reject State")
        state.isError = true;
    })

  }, // extraReducers

}); // userSlice

export default userSlice.reducer;
