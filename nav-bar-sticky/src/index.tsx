import React, { ReactNode, StrictMode } from 'react';
import ReactDOM, { Root } from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import 'normalize.css';
import StyledApp from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';

const root: Root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    .menu-offset-left {
        margin-right: auto;
    }

    .menu-offset-right {
        margin-right: 20px;
    }
`;

const appNode: ReactNode = (
  <StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <StyledApp />
    </Provider>
  </StrictMode>
);

root.render(appNode);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
