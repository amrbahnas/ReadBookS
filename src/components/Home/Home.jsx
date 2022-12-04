import React from 'react'
import styles from './Home.module.css'
import Header from '../Header/Header';
import Section from '../Section/Section';

const Home = () => {
  return (
    <div className={styles.home}>
      <Header />
      <div className="container">
        <Section title={"currently Reading"} />
        <Section title={"want to Read"} />
      </div>
      <div className={styles.add}>+</div>
    </div>
  );
}

export default Home
