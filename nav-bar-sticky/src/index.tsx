import React, { ReactNode } from 'react';
import ReactDOM, { Root } from 'react-dom/client';
import './index.css';
import { App } from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';

const root: Root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const renderChildren: ReactNode = (
  <Provider store={store}>
    <App />
  </Provider>
);

root.render(renderChildren);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
