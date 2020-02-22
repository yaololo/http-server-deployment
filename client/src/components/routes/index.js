import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Content1 from "../content/content1";
import Content2 from "../content/content2";
import Content3 from "../content/content3";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Content1} />
      <Route path="/content2" component={Content2} />
      <Route path="/content3" component={Content3} />
      <Route component={() => <Redirect to={"/"} />} />
    </Switch>
  );
};

export default Routes;
