import {useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch} from 'react-redux';
import { MyBooks } from "../../store/apiSlice";
import styles from './Home.module.css'
import Header from "./Header";
import Shelf from "../shelf/Shelf";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(MyBooks());
  }, [dispatch]);

  ////////////////////////////// DOM /////////////////////////////////////////////////
  return (
    <div className={styles.home}>
      <Header />
      <div className="container">
        <Shelf title={"currently Reading"} shelfNum={1} />
        <Shelf title={"want to Read"} shelfNum={2} />
        <Shelf title={"Read"} shelfNum={3} />
      </div>
      <div className={styles.add} onClick={() => navigate("books/srarch")}>
        +
      </div>
    </div>
  );
}

export default Home
