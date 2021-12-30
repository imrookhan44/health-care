import React,{useState ,useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/home/Home";
import Header from "../components/navbar/Header";
import Login from "../components/login/Login";
import Calculate from "../components/calculate/Calculate";
import Register from "../components/register/Register";


export default function Routes(isLoggedIn) {
  const [user] = useState();
const [oldUser] = useState();
  return (
    <Switch>
     
      <Route path="/calculate" component={Calculate} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/" component={isLoggedIn ? Home: Login} />
      {user ? <Routes /> : oldUser && <Login />}
    </Switch>
  );
}
 