import React,{useState,memo} from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import {clear} from '../../store/booksSlice'
import Styles from './Header.module.css'

const Header = ({ searchValue }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // onclick back button
  const backHandler = () => {
    navigate("/");
    dispatch(clear());
  };

  const [value, SetValue] = useState("");
  const changeHandler = (input) => {
    SetValue(input);
    searchValue(input);
  };
  ////////////////////////////// DOM /////////////////////////////////////////////////
  return (
    <header className={Styles.searchHeader}>
      <ul>
        <li>
          <i className="fa-solid fa-angles-left" onClick={backHandler}></i>
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

export default memo(Header)
