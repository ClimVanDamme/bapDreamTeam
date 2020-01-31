import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import styles from "./App.module.css";

import Home from "./Home";
import Admin from "./Admin";
import About from "./About";

import { ROUTES } from "../constants";
import Sporza from "./Sporza";

class App extends Component {
  render() {
    return (
      <main className={styles.layout}>
        <Switch>
          <Route path={ROUTES.home} exact strict component={Home} />
          <Route path={ROUTES.admin} component={Admin} />
          <Route path={ROUTES.about} component={About} />
          <Route path={ROUTES.sporza} exact strict component={Sporza} />
        </Switch>
      </main>
    );
  }
}

export default withRouter(App);
