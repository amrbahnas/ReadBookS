import React from 'react'
import { useNavigate } from "react-router-dom";
import styles from './Home.module.css'
import Header from "../homeHeader/Header";
import Section from '../homeSection/Section';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.home}>
      <Header />
      <div className="container">
        <Section title={"currently Reading"} sectionNum={1} />
        <Section title={"want to Read"} sectionNum={2} />
        <Section title={"Read"} sectionNum={3} />
      </div>
      <div className={styles.add} onClick={() => navigate("books/srarch")}>
        +
      </div>
    </div>
  );
}

export default Home
