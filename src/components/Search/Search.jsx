import React, { useState, useEffect } from "react";
import Book from "../Book/Book";
import { search, clear } from "../../store/apiSlice";
import { useSelector, useDispatch} from "react-redux";

import Header from "./../searchHeader/Header";
const Search = () => {
  const dispatch = useDispatch();
  const { books } = useSelector((store) => store.apiSlice.apiBooks);
  const [value, setValue] = useState([]);
  const searchValue = (value) => {
    setValue(value);
  };

  useEffect(() => {
    if (value) {
      dispatch(search(value));
    }else{
      dispatch(clear());
    }
  }, [value, dispatch]);

  return (
    <div>
      <Header searchValue={searchValue} />
      <section>
        {books && books.length > 0 ? (
          books.map((el) => <Book info={el} sectionNum={4} key={el.id} />)
        ) : (
          <div>Empty</div>
        )}
      </section>
    </div>
  );
};

export default Search;
