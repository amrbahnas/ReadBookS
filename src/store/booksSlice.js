import { createSlice } from "@reduxjs/toolkit";

/////////////////////////////////////GLOBAL State///////////////////////////////////////////
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
      const { toShelf, info } = action.payload;
      if (!info.length) {
        state[toShelf].push(info);
      } else {
        for (const value of info) {
          console.log(value);
          state[toShelf].push(value);
        }
      }
    },
  },
});

export const { changeShelf, addBook } = booksSlice.actions;
export default booksSlice.reducer;
