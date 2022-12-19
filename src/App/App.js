import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { MyBooks } from "../store/booksSlice";

import { Outlet } from "react-router-dom";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(MyBooks());
  }, [dispatch]);
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default App;
