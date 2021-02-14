import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Form from './components/Form';
import VotingDisplay from './components/VotingDisplay';
import AdminDisplay from "./components/AdminDisplay"


ReactDOM.render(
  <Router>
    <Route exact path="/" component={App} />
    <Route exact path="/login" render={() => <Form path="/login" name="Login" />} />
    <Route exact path="/register" render={() => <Form path="/register" name="Register" />} />
    <Route exact path="/voting" component={VotingDisplay} />
    <Route exact path="/admin" component={AdminDisplay} />
  </Router>,
  document.getElementById('root')
);
