import React, { useState, useEffect} from "react";
import Book from "../../components/Book/Book";
import { search, clear } from "../../store/booksSlice";
import { useSelector, useDispatch } from "react-redux";
import useDebounce from "./useDebounce";

import Header from "./Header";
const Search = () => {
  const dispatch = useDispatch();

  //get global state
  const { books } = useSelector((store) => store.books.apiBooks);

  //greate localState for carry search input
  const [value, setValue] = useState("");

  // Get search input from search-header component and set state(value)
  const searchValue = (value) => {
    setValue(value);
  };

  //dispatch search Action using useDebounce
  const debouncedValue = useDebounce(value, 500);
  useEffect(() => {
    if (debouncedValue) {
      // fetch 
      dispatch(search({ query: debouncedValue.trim(), maxResults: 15 }));
    } else {
      //clean current search results
      dispatch(clear());
    }
  }, [debouncedValue, dispatch]);

  ////////////////////////////// DOM /////////////////////////////////////////////////
  return (
    <div>
      <Header searchValue={searchValue} />
      <section>
        {value === "" ? (
          <div>Start Search</div>
        ) : books && books.length > 0 ? (
          books.map((el) => <Book info={el} shelfNum={4} key={el.id} />)
        ) : (
          <div>Not Found !</div>
        )}
      </section>
    </div>
  );
};

export default Search;
