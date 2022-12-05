import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const api = "https://reactnd-books-api.udacity.com";

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token;
if (!token) token = localStorage.token = Math.random().toString(36).substr(-8);
const headers = {
  Accept: "application/json",
  Authorization: token,
};

//////////////////////////////////createAsyncThunk//////////////////////////////////////
export const search = createAsyncThunk(
  "api/fetchBooks",
  async (query, thunkAPI) => {
    const { rejectedWithValue } = thunkAPI;
    try {
      const res = await fetch(`https://reactnd-books-api.udacity.com/search`, {
        method: "POST",
        headers: {
          ...headers,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);
/////////////////////////////////////GLOBAL State///////////////////////////////////////////
const initialState = {loading:false, apiBooks:[]};
export const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    clear:(state)=>{
     state.apiBooks =[];
     console.log("clear")
    }
  },
  extraReducers: {
    [search.pending]: (state) => {
      state.loading = true;
    },
    [search.fulfilled]: (state, action) => {
      state.loading = false;
      state.apiBooks = action.payload;
    },
    [search.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export const { clear } =apiSlice.actions;
export default apiSlice.reducer;
