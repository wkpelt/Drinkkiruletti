import React from "react";
import { Switch, Route } from "react-router-dom";
import Ruletti from "./Ruletti";
import Juomat from "./Juomat";
import Who from "./Who";
import Etusivu from "./Etusivu";
import Villebot from "./Villebot";
import Market from "./Market";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Resume from "./Resume";

const Main = () => {
  return (
    <Switch>
      <Route exact path={"/"} component={Etusivu} />
      <Route exact path={"/drinkkiruletti"} component={Ruletti} />
      <Route exact path={"/drinkkiruletti/juomat"} component={Juomat} />
      <Route exact path={"/drinkkiruletti/who"} component={Who} />
      <Route exact path={"/aboutme"} component={AboutMe} />
      <Route exact path={"/projects"} component={Projects} />
      <Route exact path={"/resume"} component={Resume} />
      <Route exact path={"/villebot"} component={Villebot} />
      <Route exact path={"/mordormarket"} component={Market} />
      <Route component={Ruletti} />
    </Switch>
  );
};

export default Main;
