import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import styles from './Home.module.css'
import Header from "./Header";
import Shelf from "../../components/shelf/Shelf";

const Home = () => {
  const navigate = useNavigate();

  ////////////////////////////// DOM /////////////////////////////////////////////////
  return (
    <div className={styles.home}>
      <Header />
      <div className="container">
        <Shelf title={"currently Reading"} shelfNum={1} />
        <Shelf title={"want to Read"} shelfNum={2} />
        <Shelf title={"Read"} shelfNum={3} />
      </div>
      <motion.div className={styles.add} onClick={() => navigate("search")} whileHover={{scale:1.1}}>
        +
      </motion.div>
    </div>
  );
}

export default Home
