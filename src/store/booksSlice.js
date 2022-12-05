import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  allBooks: ["react", "javascript", "CSS", "php","java", "flutter","reactNative", "Electron"],
  currentlyReading: ["react", "javascript", "CSS", "php"],
  wantToRead: ["java", "flutter"],
  read: ["reactNative", "Electron"],
};
export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    changeShelf: (state, action) => {
      const { fromShelf, toShelf, bookTitle } = action.payload;
      state[fromShelf] = state[fromShelf].filter((book) => book !== bookTitle);
      state[toShelf].push(bookTitle);
    },
  },
});

export const { changeShelf } = booksSlice.actions;
export default booksSlice.reducer;
