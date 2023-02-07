import React, { ReactNode } from 'react';
import ReactDOM, { Root } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import RootComponent from './RootComponent';
import ErrorPage from './ErrorPage';
import About from './About';
import Offer from './Offer';
import Contact from './Contact';
import reportWebVitals from './reportWebVitals';

type RouteObject = {
  path: string;
  element: JSX.Element;
  errorElement?: JSX.Element;
};
type RouteObjectStorage = RouteObject[];

const routes: RouteObjectStorage = [
  {
    path: '/',
    element: <RootComponent />,
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
];

const router = createBrowserRouter(routes);
const root: Root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const routerProvider: ReactNode = (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

root.render(routerProvider);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
