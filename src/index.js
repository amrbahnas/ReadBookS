import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from "./store/index";
import { Provider } from "react-redux";
import './index.css';
import App from './App/App';
// import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home/Home';
import Search from './pages/Search/Search'; 
import BookDetails from './pages/BookDetails/BookDetails'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>error</div>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        element: <Search />,
        path: "search",
      },
      {
        element: <BookDetails />,
        path: "book/:id",
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  // </React.StrictMode>
);


// reportWebVitals();
