import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeShelf, insertBook, updateBook} from "../../store/booksSlice";
import styles from "./Book.module.css";

const Controls = ({ shelfNum, info }) => {
  /************variables************** */
  const dispath = useDispatch();
  const buttom = useRef();
  const menu = useRef();
  const { currentlyReading, wantToRead, read } = useSelector(
    (store) => store.books
  );

   let currentShelf ="search";
   
  /************Functions************** */

  // open Or close Menu
  const menuHandler = () => {
    menu.current.classList.toggle("show");
    buttom.current.classList.toggle("hidden");
  };

  // insert book to X shelf
  const toShelfHandler = (data) => {
    if (currentShelf !=="search") {
      dispath(changeShelf(data));
      const { info, toShelf } = data;
      dispath(updateBook({ id: info.id, shelf: toShelf }));
    } else {
      dispath(insertBook(data));
      dispath(changeShelf(data));
    }
    menuHandler();
  };

  //right sign at None
  let noOne = true;
  const none = () => {
    if (noOne) {
      return <span className="visiable">✔</span>;
    } else {
      return <span>✔</span>;
    }
  };

  //right sign at Current Shelf
  const handlerRightSign = (sectionInfo) => {
    const { globalState, myShelf } = sectionInfo;
    if (globalState.find((book) => book.id === info.id)) {
      noOne = false;
      currentShelf = myShelf;
      return <span className="visiable">✔</span>;
    } else {
      return <span>✔</span>;
    }
  };

  ////////////////////////////// DOM /////////////////////////////////////////////////
  return (
    <div className={styles.options}>
      <div className={styles.button} ref={buttom} onClick={menuHandler}></div>
      <div className={styles.menu} ref={menu}>
        <ul>
          <li className={styles.disable}>
            <span>✔</span>
            {shelfNum === 4 ? "Add to ..." : "Move to..."}
          </li>
          <li
            onClick={() =>
              toShelfHandler({
                currentShelf,
                toShelf: "currentlyReading",
                info,
              })
            }
          >
            {handlerRightSign({
              globalState: currentlyReading,
              myShelf: "currentlyReading",
            })}
            currently Reading
          </li>
          <li
            onClick={() =>
              toShelfHandler({
                currentShelf,
                toShelf: "wantToRead",
                info,
              })
            }
          >
            {handlerRightSign({
              globalState: wantToRead,
              myShelf: "wantToRead",
            })}
            Want toRead
          </li>
          <li
            onClick={() =>
              toShelfHandler({
                currentShelf,
                toShelf: "read",
                info,
              })
            }
          >
            {handlerRightSign({ globalState: read, myShelf: "read" })}
            Read
          </li>
          <li onClick={menuHandler}>
            {none()}
            None
          </li>
        </ul>
      </div>
    </div>
  );
};

export default React.memo(Controls);
