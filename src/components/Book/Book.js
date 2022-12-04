import React from "react";
import styles from "./Book.module.css";
import bookImage from "../../Images/book.jpg";
const Book = () => {
  return (
    <div className={styles.book}>
      <div className={styles.image}>
        <img src={bookImage} alt="book" />
        <div className={styles.options}>
          <div className={styles.button}></div>
          <div className={styles.menu}>
            <ul>
              <li>
                <span>$</span>move to...
              </li>
              <li>
                <span>$</span>
                currently Reading
              </li>
              <li>
                <span>$</span>
                Want toRead
              </li>
              <li>
                <span>$</span>
                Read
              </li>
              <li>
                <span>$</span>
                None
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.theFooter}>
        <h3>titile</h3>
        <p>description</p>
      </div>
    </div>
  );
};

export default Book;
