import Controls from "./Controls";
import styles from "./Book.module.css";
import propTypes from 'prop-types'
const Book = ({ shelfNum, info }) => {
  //book info
  const { title, authors, imageLinks } = info;
  return (
    <div className={styles.book}>
      <div className={styles.image}>
        <img src={imageLinks.thumbnail} alt="book" />
        <Controls shelfNum={shelfNum} info={info} />
      </div>
      <div className={styles.theFooter}>
        <h3>{title}</h3>
        {authors? (
          <p>{authors.join(" ")}</p>
        ) : (
          <p>Unknown</p>
        )}
      </div>
    </div>
  );
};

Book.propTypes = {
  shelfNum: propTypes.number.isRequired,
  info: propTypes.object.isRequired
};

export default Book;
