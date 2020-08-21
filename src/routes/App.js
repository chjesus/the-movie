import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

// Views
import Error404 from "../views/Error404";
import Home from "../views/Home";
import Movie from "../views/Movie";
import NewMovies from "../views/NewMovies";
import Popular from "../views/Popular";
import SearchMovie from "../views/SearchMovie";

import AppRoute from "./AppRoute";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <AppRoute exact={true} path="/" component={Home} />
        <AppRoute exact={true} path="/new-movies" component={NewMovies} />
        <AppRoute exact={true} path="/popular" component={Popular} />
        <AppRoute exact={true} path="/search" component={SearchMovie} />
        <AppRoute exact={true} path="/movie/:id" component={Movie} />
        <AppRoute exact={true} path="*" component={Error404} />
      </Switch>
    </Router>
  );
}

export default App;
