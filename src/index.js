import React from "react";
import ReactDOM from "react-dom";
import { Router, Switch, Route } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import App from "./components/App";
import Facts from "./components/Facts";
import ArtistFinder from "./projects/artist-finder";
import HsCardsSearch from "./projects/hs-cards-search";
import Header from "./components/Header";
import "./index.css";

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <Switch>
      <Route exact path="/" render={() => <Header><App /></Header>} />
      <Route path="/facts" render={() => <Header><Facts /></Header>} />
      <Route path="/artist-finder" render={() => <Header><ArtistFinder /></Header>} />
      <Route path="/cards-search" render={() => <Header><HsCardsSearch /></Header>} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
