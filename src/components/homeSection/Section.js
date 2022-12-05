import React from "react";
import { useSelector } from "react-redux";
import Book from "../Book/Book";
import styles from "./Section.module.css";
const Section = ({ title, sectionNum }) => {
  const { currentlyReading, wantToRead, read } = useSelector(
    (store) => store.books
  );

  const data = new Map([
    [1, currentlyReading],
    [2, wantToRead],
    [3, read],
  ]);

  const books = data.get(sectionNum);

  return (
    <article>
      <div className={styles.title}>{title}</div>
      <section>
        {books.length > 0 ? (
          books.map((el) => (
            <Book
              sectionNum={sectionNum}
              bookTitle={el}
              key={el}
            />
          ))
        ) : (
          <div>Empty Shelf</div>
        )}
      </section>
    </article>
  );
};

export default Section;
