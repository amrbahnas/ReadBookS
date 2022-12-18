import React from "react";
import styles from "./Details.module.css";

import { useSelector } from "react-redux";
const BookDetails = () => {
  const { title, subtitle, publishedDate, description, authors, imageLinks } =
    useSelector((state) => state.books.bookInfo);
  return (
      <div className={styles.main}>
        <div className={styles.info}>
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <p>author: {authors}</p>
          <p>publishedDate: {publishedDate}</p>
          <p>{description}</p>
        </div>
        <div className={styles.image}>
          <img src={imageLinks.thumbnail} alt="book" />
        </div>
      </div>
  );
};

export default BookDetails;
