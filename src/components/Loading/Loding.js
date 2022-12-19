import React from 'react'
import styles from "./Loading.module.css"
const Loding = () => {
  return (
    <div className={styles.spinner}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Loding
