import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { changeShelf } from "../../store/booksSlice";

import styles from "./Book.module.css";
import bookImage from "../../Images/book.jpg";

const Book = ({ sectionNum, bookTitle}) => {
  const dispath = useDispatch();
  const menu = useRef();
  const buttom = useRef();

  const fromShelf = new Map([
    [1, "currentlyReading"],
    [2, "wantToRead"],
    [3, "read"],
  ]).get(sectionNum);

  const menuHandler = () => {
    menu.current.classList.toggle("show");
    buttom.current.classList.toggle("hidden");
  };

  const toShelfHandler = (data) => {
    dispath(changeShelf(data));
  };

  return (
    <div className={styles.book}>
      <div className={styles.image}>
        <img src={bookImage} alt="book" />
        <div className={styles.options}>
          <div
            className={styles.button}
            ref={buttom}
            onClick={menuHandler}
          ></div>
          <div className={styles.menu} ref={menu}>
            <ul>
              <li className={styles.disable}>
                <span>✔</span>move to...
              </li>
              <li
                onClick={() =>
                  toShelfHandler({
                    fromShelf,
                    toShelf: "currentlyReading",
                    bookTitle,
                  })
                }
              >
                {sectionNum === 1 ? (
                  <span className="visiable">✔</span>
                ) : (
                  <span>✔</span>
                )}
                currently Reading
              </li>
              <li
                onClick={() =>
                  toShelfHandler({
                    fromShelf,
                    toShelf: "wantToRead",
                    bookTitle,
                  })
                }
              >
                {sectionNum === 2 ? (
                  <span className="visiable">✔</span>
                ) : (
                  <span>✔</span>
                )}
                Want toRead
              </li>
              <li
                onClick={() =>
                  toShelfHandler({
                    fromShelf,
                    toShelf: "read",
                    bookTitle,
                  })
                }
              >
                {sectionNum === 3 ? (
                  <span className="visiable">✔</span>
                ) : (
                  <span>✔</span>
                )}
                Read
              </li>
              <li onClick={menuHandler}>
                <span>✔</span>
                None
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.theFooter}>
        <h3>{bookTitle}</h3>
        <p>description</p>
      </div>
    </div>
  );
};

export default Book;
