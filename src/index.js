import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyATZApxZosMiYGnEPGp5nGB3ereWWxl84w',
  authDomain: 'citi-hackoverflow-group-12.firebaseapp.com',
  projectId: 'citi-hackoverflow-group-12',
  storageBucket: 'citi-hackoverflow-group-12.appspot.com',
  messagingSenderId: '627690431375',
  appId: '1:627690431375:web:e54e090c981dc4e6a2a1fa',
  measurementId: 'G-ZGYJQPYTMP',
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
