import { BrowserRouter,Route,Redirect } from "react-router-dom";
import "./App.css";
import React,{useEffect,useState} from "react";
import { auth } from "./components/Firebase";
import Login from "./components/login/Login";
import Header from "./components/navbar/Header";
import Routes from "./routes/Routes";
import Home from "./components/home/Home";
const authentication = {
  onAuthtication() {},
  getLogInStatus() {
    return auth?.currentUser?.uid;
  },
};
export function SecureRoute(props) {
  console.log("auth user 2 ", auth?.currentUser?.email);
  return (
    <Route
      path={props.path}
      render={(data) =>
        authentication.getLogInStatus() ? (
          <props.component {...data}></props.component>
        ) : (
          <Redirect to={{ pathname: "/" }}></Redirect>
        )
      }
    ></Route>
  );
}
function App() {

  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
      {auth?.currentUser?.email && <Header/>}

        {auth?.currentUser?.email ? <Routes /> : <Login />}
      </BrowserRouter>
    </div>
  );
}

export default App;
