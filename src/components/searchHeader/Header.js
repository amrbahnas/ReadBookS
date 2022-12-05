import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";

import Styles from './header.module.css'
const Header = ({ searchValue }) => {

  const navigate = useNavigate();
  const [value,SetValue] =useState("");

  const changeHandler =(input)=>{
    SetValue(input);
    searchValue(input);
  }
  return (
    <header className={Styles.searchHeader}>
      <ul>
        <li>
          <i
            className="fa-solid fa-angles-left"
            onClick={() => navigate("/")}
          ></i>
        </li>
        <li>
          <input
            type="search"
            placeholder="Search by titile,author, or ISBN"
            autoFocus
            value={value}
            onChange={(e) => changeHandler(e.target.value)}
          ></input>
        </li>
      </ul>
    </header>
  );
};

export default Header
