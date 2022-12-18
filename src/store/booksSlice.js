import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//////////////////////////////////API Handel//////////////////////////////////////
const api = "https://reactnd-books-api.udacity.com";

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token;
if (!token) token = localStorage.token = Math.random().toString(36).substr(-8);
const headers = {
  Accept: "application/json",
  Authorization: token,
};

//////////////////////////////////createAsyncThunk//////////////////////////////////////

/********Get myBooks*********/
export const MyBooks = createAsyncThunk(
  "books/fetchMyBooks",
  async (_, thunkAPI) => {
    const { rejectedWithValue } = thunkAPI;
    try {
      const res = await fetch(`${api}/books`, {
        method: "GET",
        headers,
      });
      const data = await res.json();
      return data.books;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);

/********insert Book*********/

export const insertBook = createAsyncThunk(
  "books/insertBook",
  async ({ toShelf, info }, thunkAPI) => {
    const { rejectedWithValue } = thunkAPI;
    try {
      const res = await fetch(`${api}/books/${info.id}`, {
        method: "PUT",
        headers: { ...headers, "Content-Type": "application/json" },
        body: JSON.stringify({ ...info, shelf: toShelf }),
      });
      const data = res.json();
      return data;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);
/********update Book*********/

export const updateBook = createAsyncThunk(
  "books/updateBook",
  async ({id,shelf}, thunkAPI) => {
    const { rejectedWithValue } = thunkAPI;
    try {
      const res = await fetch(`${api}/books/${id}`, {
        method: "PUT",
        headers: { ...headers, "Content-Type": "application/json" },
        body: JSON.stringify({shelf}),
      });
      const data = res.json();
      return data;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);

/************Search*********/

export const search = createAsyncThunk(
  "books/fetchBooks",
  async (data, thunkAPI) => {
    const { query, maxResults } = data;
    const { rejectedWithValue } = thunkAPI;
    try {
      const res = await fetch(`${api}/search`, {
        method: "POST",
        headers: {
          ...headers,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query, maxResults }),
      });
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);

/////////////////////////////////////GLOBAL State///////////////////////////////////////////
const initialState = {
  currentlyReading: [],
  wantToRead: [],
  read: [],
  apiBooks: [],
  bookInfo:{},
  loading: false,
};
export const booksSlice = createSlice({
  name: "books",
  initialState,

  ///////////////////////Reducers myBooks///////////////////////////////////

  reducers: {
    changeShelf: (state, action) => {
      const { currentShelf, toShelf, info } = action.payload;
      if (currentShelf !== "search") {
        state[currentShelf] = state[currentShelf].filter(
          (book) => book.id !== info.id
        );
      }
      state[toShelf].push({...info,shelf: info.shelf});
    },
    clear: (state) => {
      state.apiBooks = [];
    },
    addBookInfo:(state,action)=>{
     state.bookInfo =action.payload
    }
  },  
  ///////////////////////ExtraReducers myBooks///////////////////////////////////

  extraReducers: {

    [MyBooks.pending]: (state) => {
      state.loading = true;
    },
    //when fetch succeeds push books to thier shelf
    [MyBooks.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentlyReading = action.payload.filter(
        (el) => el.shelf === "currentlyReading"
      );
      state.wantToRead = action.payload.filter(
        (el) => el.shelf === "wantToRead"
      );
      state.read = action.payload.filter((el) => el.shelf === "read");
    },
    [MyBooks.rejected]: (state, action) => {
      state.loading = false;
      console.log("field");
    },
    ///////////////////////////ExtraReducers insert//////////////////////////////////////////

    [insertBook.pending]: (state) => {
      state.loading = true;
    },
    [insertBook.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [insertBook.rejected]: (state, action) => {
      state.loading = false;
      console.log(action.payload);
    },
    ///////////////////////////ExtraReducers Update//////////////////////////////////////////

    [updateBook.pending]: (state) => {
      // state.loading = true;
    },
    [updateBook.fulfilled]: (state, action) => {
      // state.loading = false;
    },
    [updateBook.rejected]: (state, action) => {
      state.loading = false;
      console.log(action.payload);

    },
    ///////////////////////////ExtraReducers search//////////////////////////////////////////
    [search.pending]: (state) => {
      state.loading = true;
    },
    [search.fulfilled]: (state, action) => {
      state.loading = false;
      if(action.payload.books.length > 0){
      const data = action.payload.books.filter((el) => el.imageLinks);
            state.apiBooks = { books: data };
      };   
    },
    [search.rejected]: (state, action) => {
      state.loading = false;
      console.log(action.payload);
    },
  },
});

export const { changeShelf, clear, addBookInfo } = booksSlice.actions;
export default booksSlice.reducer;
