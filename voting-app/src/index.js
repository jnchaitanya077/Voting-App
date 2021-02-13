import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './components/Login';


ReactDOM.render(
  <Router>
    <Route exact path="/" component={App} />
    <Route exact path="/login" component={Login} />
  </Router>,
  document.getElementById('root')
);
