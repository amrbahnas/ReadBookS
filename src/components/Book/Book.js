import { motion } from "framer-motion";

import Controls from "./Controls";
import styles from "./Book.module.css";
import propTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {addBookInfo} from "../../store/booksSlice"
const Book = ({ shelfNum, info }) => {
  //book info
  const { title, authors, imageLinks } = info;
  // go to details page
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const navigteHandler = (info) => {
    dispatch(addBookInfo(info));
    navigate(`/book/${info.id}`);
  };
  /////////////////////////////Dom///////////////////////////////////
  return (
    <motion.div className={styles.book} whileHover={{ y: -20 }}>
      <div className={styles.image}>
        <img
          src={imageLinks.thumbnail}
          alt="book"
          onClick={() => navigteHandler(info)}
        />
        <Controls shelfNum={shelfNum} info={info} />
      </div>
      <div className={styles.theFooter}>
        <h3>{title}</h3>
        {authors ? <p>{authors.join(" ")}</p> : <p>Unknown</p>}
      </div>
    </motion.div>
  );
};

Book.propTypes = {
  shelfNum: propTypes.number,
  info: propTypes.object.isRequired,
};

export default Book;
