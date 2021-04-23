import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./Custom Strap Theme/customstrap.css";
import 'react-bootstrap-typeahead/css/Typeahead.css';
import {BrowserRouter} from 'react-router-dom'
import AuthProvider from './providers/AuthProvider';
import { initMiddleware, } from 'devise-axios'
import "filepond/dist/filepond.min.css";

initMiddleware()

ReactDOM.render(
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
