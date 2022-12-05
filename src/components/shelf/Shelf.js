import React from "react";
import { useSelector } from "react-redux";
import Book from "../Book/Book";
import styles from "./shelf.module.css";
const Shelf = ({ title, shelfNum }) => {
  const { currentlyReading, wantToRead, read } = useSelector(
    (store) => store.books
  );

  const data = new Map([
    [1, currentlyReading],
    [2, wantToRead],
    [3, read],
  ]);

  const books = data.get(shelfNum);

  return (
    <article>
      <div className={styles.title}>{title}</div>
      <section>
        {books.length > 0 ? (
          books.map((el) => <Book info={el} shelfNum={shelfNum} key={el.id} />)
        ) : (
          <div>Empty Shelf</div>
        )}
      </section>
    </article>
  );
};

export default Shelf;
