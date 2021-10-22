import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
//import App from './App';
import { Goldielocks } from './components/Goldielocks';


ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Goldielocks />
  </React.StrictMode>,
  document.getElementById('root')
);

