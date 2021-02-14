import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Form from './components/Form';


ReactDOM.render(
  <Router>
    <Route exact path="/" component={App} />
    <Route exact path="/login" render={() => <Form path="/login" name="Login" />} />
    <Route exact path="/register" render={() => <Form path="/register" name="Register" />} />
  </Router>,
  document.getElementById('root')
);
