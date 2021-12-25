import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/home/Home";
import Login from "../components/login/Login";
import Calculate from "../components/calculate/Calculate";

import Register from "../components/register/Register";

export default function Routes() {
  return (
    <Switch>


    <Route path="/" exact  component={Home} />
    <Route path="/calculate" component={Calculate} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Switch>
  );
}
