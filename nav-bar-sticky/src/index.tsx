import React, { ReactNode } from 'react';
import ReactDOM, { Root } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import './index.css';
import {
  RootComponent,
  ErrorPage,
  About,
  Offer,
  Contact,
} from './components/index';
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

const root: Root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const routerProvider: ReactNode = (
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={createBrowserRouter(routes)} />
    </Provider>
  </React.StrictMode>
);

root.render(routerProvider);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
