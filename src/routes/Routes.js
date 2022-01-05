import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/home/Home";

import Login from "../components/login/Login";
import Calculate from "../components/calculate/Calculate";
import Register from "../components/register/Register";
import Client from "../components/client/client-list/Client";
import ViewClient from "../components/client/client-setup/ViewClient";
// import Services from "../components/client/client-setup/services/Services";
// import BasicProfile from "../components/client/client-setup/basicProfile/BasicProfile";
// import ClientStatus from "../components/client/client-setup/ClientStatus/ClientStatus";
import Supervisory from "../components/supervisory/Supervisory";
import AppSetting from "../components/appSetting/AppSetting";
import NewAddress from "../components/newAddress/NewAddress";
import Employee from "../components/employee/Employee";
import Performance from "../components/performance/Performance";

import ClientSetup from "../components/clientSetup/ClientSetup";

export default function Routes(isLoggedIn) {
  const [user] = useState();
  const [oldUser] = useState();
  return (
    <Switch>
      <Route path="/calculate" component={Calculate} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/client" component={Client} />
      <Route path="/supervisory" component={Supervisory} />
      <Route path="/viewClient" component={ViewClient} />
      <Route path="/clientSetup" component={ClientSetup} />
      <Route path="/appSetting" component={AppSetting} />
      <Route path="/employee" component={Employee} />
      <Route path="/newAddress" component={NewAddress} />
      <Route path="/performance" component={Performance} />
      {/* <Route path="/basicProfile" component={BasicProfile} />
      <Route path="/services" component={Services} />
      <Route path="/clientStatus" component={ClientStatus} /> */}
      <Route path="/" component={isLoggedIn ? Home : Login} />
      {user ? <Routes /> : oldUser && <Login />}
    </Switch>
  );
}
