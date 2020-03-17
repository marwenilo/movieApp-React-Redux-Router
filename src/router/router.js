import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CardContainer from "../component/CardContainer";
import Description from "../component/Description"

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={CardContainer} />
 <Route path="/description/:id" exact component={Description} />
    </Switch>
  </Router>
);

export default AppRouter;