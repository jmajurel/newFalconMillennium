import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Components/Home";
import PlanetsPage from "./PlanetsPage";
import StarsPage from "./StarsPage";

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/planets" component={PlanetsPage} />
        <Route path="/stars" component={StarsPage} />
        <Route path="/galaxy" render={() => <h1>Galaxy</h1>} />
      </Switch>
    );
  }
}

export default Main;
