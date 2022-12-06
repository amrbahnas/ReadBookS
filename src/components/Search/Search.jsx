import React, { useState, useEffect } from "react";
import Book from "../Book/Book";
import { search, clear } from "../../store/apiSlice";
import { useSelector, useDispatch } from "react-redux";

import Header from "./Header";
const Search = () => {
  const dispatch = useDispatch();

  //get global state
  const { books } = useSelector((store) => store.apiSlice.apiBooks);

  //greate localState for carry search input
  const [value, setValue] = useState([]);

  // Get search input from search-header component and set state(value)
  const searchValue = (value) => {
    setValue(value);
  };

  //dispatch search Action
  useEffect(() => {
    const time = setTimeout(() => {
      if (value) {
        dispatch(search({ query: value.trim(), maxResults: 15 }));
      } else {
        dispatch(clear());
      }
    }, 500);
    return () => {
      clearTimeout(time);
    };
  }, [value, dispatch]);

  ////////////////////////////// DOM /////////////////////////////////////////////////
  return (
    <div>
      <Header searchValue={searchValue} />
      <section>
        {books && books.length > 0 ? (
          books.map((el) => <Book info={el} shelfNum={4} key={el.id} />)
        ) : (
          <div>Empty</div>
        )}
      </section>
    </div>
  );
};

export default Search;
