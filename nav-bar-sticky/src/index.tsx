import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Root from './Root';
import ErrorPage from './ErrorPage';
import About from './About';
import Offer from './Offer';
import Contact from './Contact';
import reportWebVitals from './reportWebVitals';
/*
 ** don't add paths as children of a root path
 ** don't add / before a value of a child path
 ** as it's not going to be relative to the root path
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'about-us',
    element: <About />,
  },
  {
    path: 'offer',
    element: <Offer />,
  },
  {
    path: 'contact',
    element: <Contact />,
  },
]);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
