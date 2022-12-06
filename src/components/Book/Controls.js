import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeShelf, addBook } from "../../store/booksSlice";
import styles from "./Book.module.css";

const Controls = ({ shelfNum, info }) => {

 /************variables************** */
  const dispath = useDispatch();
  const buttom = useRef();
  const menu = useRef();
  const { currentlyReading, wantToRead, read } = useSelector(
    (store) => store.books
  );
  const fromShelf = new Map([
    [1, "currentlyReading"],
    [2, "wantToRead"],
    [3, "read"],
    [4, "search"],
  ]).get(shelfNum);

 /************Functions************** */
 
 //open cloase menu
  const menuHandler = () => {
    menu.current.classList.toggle("show");
    buttom.current.classList.toggle("hidden");
  };

// insert book to X shelf
  const toShelfHandler = (data) => {
    if (shelfNum < 4) {
      dispath(changeShelf(data));
    } else {
      dispath(addBook(data));
    }
    menuHandler();
  };

  // when right sign show
  const handlerRightSign = (sectionInfo) => {
    const { num, globalState } = sectionInfo;
    if (shelfNum === num || globalState.find((book) => book.id === info.id)) {
      
      return <span className="visiable">✔</span>;
    } else {
      return <span>✔</span>;
    }
  };

  return (
    <div className={styles.options}>
      <div className={styles.button} ref={buttom} onClick={menuHandler}></div>
      <div className={styles.menu} ref={menu}>
        <ul>
          <li className={styles.disable}>
            <span>✔</span>
            {shelfNum < 4 ? "Move to..." : "Add to ..."}
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
            {handlerRightSign({ num: 4, globalState: [] })}
            None
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Controls;
