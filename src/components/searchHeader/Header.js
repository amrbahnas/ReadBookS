import React from 'react'
import { useNavigate } from "react-router-dom";

import Styles from './header.module.css'
const Header = ({ searchValue }) => {
  const navigate = useNavigate();
  return (
    <header className={Styles.searchHeader}>
      <ul>
        <li>
          <i class="fa-solid fa-angles-left" onClick={() => navigate("/")}></i>
        </li>
        <li>
          <input
            type="search"
            placeholder="Search by titile,author, or ISBN"
            onKeyUp={(e) => searchValue(e.target.value)}
          ></input>
        </li>
      </ul>
    </header>
  );
};

export default Header
