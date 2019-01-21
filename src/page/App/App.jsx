import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from '../Home/home';
import Login from '../Login/login';
import Msg from "../Msg/msg";
import User from "../User/user";
import Topic from "../Topic/topic";

class App extends Component {
  render() {
    return <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/msg" component={Msg} />
          <Route path="/user" component={User} />
          <Route path="/topic" component ={Topic}/>
        </Switch>
      </Router>;
  }
}

export default App;
