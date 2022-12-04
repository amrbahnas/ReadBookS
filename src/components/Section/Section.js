import React from 'react'
import Book from '../Book/Book'
import styles from './Section.module.css'
const Section = ({title}) => {
  return (
    <article>
      <div className={styles.title}>{title}</div>
      <section>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      </section>
    </article>
  )
}

export default Section
