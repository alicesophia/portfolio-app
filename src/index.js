import React from "react";
import ReactDOM from "react-dom";
import { Router, Switch, Route } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import App from "./components/App";
import Facts from "./components/Facts";
import "./index.css";

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/facts" component={Facts} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
