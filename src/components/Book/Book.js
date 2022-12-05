import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeShelf, addBook } from "../../store/booksSlice";

import styles from "./Book.module.css";

const Book = ({ shelfNum, info }) => {
  const dispath = useDispatch();
  const menu = useRef();
  const buttom = useRef();
  const { title, subtitle, imageLinks } = info;

  const { currentlyReading, wantToRead, read } = useSelector(
    (store) => store.books
  );

  const fromShelf = new Map([
    [1, "currentlyReading"],
    [2, "wantToRead"],
    [3, "read"],
    [4, "search"],
  ]).get(shelfNum);

  const menuHandler = () => {
    menu.current.classList.toggle("show");
    buttom.current.classList.toggle("hidden");
  };

  const toShelfHandler = (data) => {
    if (shelfNum < 4) {
      dispath(changeShelf(data));
    } else {
      dispath(addBook(data));
    }
    menuHandler();
  };

  const handlerRightSign = (sectionInfo) => {
    const { num, globalState } = sectionInfo;

    if (shelfNum === num || globalState.find((book) => book.id === info.id)) {
      return (
        <span className="visiable" >
          ✔
        </span>
      );
    } else {
      return <span>✔</span>;
    }
  };

  return (
    <div className={styles.book}>
      <div className={styles.image}>
        <img src={imageLinks.thumbnail} alt="book" />
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
                    info,
                  })
                }
              >
                {handlerRightSign({ num: 1, globalState: currentlyReading })}
                currently Reading
              </li>
              <li
                onClick={() =>
                  toShelfHandler({
                    fromShelf,
                    toShelf: "wantToRead",
                    info,
                  })
                }
              >
                {handlerRightSign({ num: 2, globalState: wantToRead })}
                Want toRead
              </li>
              <li
                onClick={() =>
                  toShelfHandler({
                    fromShelf,
                    toShelf: "read",
                    info,
                  })
                }
              >
                {handlerRightSign({ num: 3, globalState: read })}
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
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default Book;
