import React, { useState } from "react";
import Book from "../Book/Book";
import { useSelector } from "react-redux";

import Header from "./../searchHeader/Header";
const Search = () => {
  const { allBooks } = useSelector((store) => store.books);
  const [books, setbooks] = useState([]);
  const searchValue = (value) => {
    if (value.length > 0) {
      setbooks(
        allBooks.filter((book) =>
          book.toLowerCase().includes(value.toLowerCase())
        )
      );
    } else {
      setbooks([]);
    }
  };
  return (
    <div>
      <Header searchValue={searchValue} />
      <section>
        {books.length > 0 ? (
          books.map((el) => <Book sectionNum={4} bookTitle={el} key={el} />)
        ) : (
          <div>Empty</div>
        )}
      </section>
    </div>
  );
};

export default Search;
