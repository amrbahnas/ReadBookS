import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
// import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home/Home';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<div>error</div>,
    children:[{
      index: true,
      element: <Home />
    }]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


// reportWebVitals();
