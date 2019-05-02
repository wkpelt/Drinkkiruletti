import React from "react";
import { Switch, Route } from "react-router-dom";
import Ruletti from "./Ruletti";
import Juomat from "./Juomat";
import Who from "./Who";
import Etusivu from "./Etusivu";

const Main = () => {
  return (
    <Switch>
      <Route exact path={"/"} component={Etusivu} />
      <Route exact path={"/drinkkiruletti"} component={Ruletti} />
      <Route exact path={"/drinkkiruletti/juomat"} component={Juomat} />
      <Route exact path={"/drinkkiruletti/who"} component={Who} />
      <Route exact path={"/aboutme"} component={Etusivu} />
      <Route exact path={"/projects"} component={Etusivu} />
      <Route exact path={"/resume"} component={Etusivu} />
      <Route component={Ruletti} />
    </Switch>
  );
};

export default Main;
