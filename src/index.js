import React ,{useContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './root';
import {Context} from './context/index';

ReactDOM.render(
  <React.StrictMode>
    <Context>
    <Root />
    </Context>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
