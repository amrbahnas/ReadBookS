import { configureStore } from "@reduxjs/toolkit";
import books from './booksSlice'
// import apiSlice from './apiSlice'
export const store = configureStore({
  reducer: { books },
});
