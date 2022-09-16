import React from "react";
import ReactDOM from "react-dom";
import { Router, Switch, Route } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import App from "./components/App";
import Facts from "./components/Facts";
import Header from "./components/Header";
import "./index.css";

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <Switch>
      <Route exact path="/" render={() => <Header><App /></Header>} />
      <Route path="/facts" render={() => <Header><Facts /></Header>} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
