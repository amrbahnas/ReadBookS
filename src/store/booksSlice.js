import { createSlice } from "@reduxjs/toolkit";

/////////////////////////////////////GLOBAL State///////////////////////////////////////////


//  if (localStorage.length < 1) {
//    localStorage.setItem("currentlyReading", "[2]");
//    localStorage.setItem("wantToRead", "[5]");
//    localStorage.setItem("read", "[7]");
//  }

const initialState = {
  currentlyReading: [],
  wantToRead: [],
  read: [],
};
export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    changeShelf: (state, action) => {
      const { fromShelf, toShelf, info } = action.payload;
      state[fromShelf] = state[fromShelf].filter((book) => book.id !== info.id);
      state[toShelf].push(info);
    },
    addBook: (state, action) => {
      const {  toShelf, info } = action.payload;
      state[toShelf].push(info);
    }
  },
 
});

export const { changeShelf, addBook} = booksSlice.actions;
export default booksSlice.reducer;
