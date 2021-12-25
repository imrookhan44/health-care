import { BrowserRouter } from "react-router-dom";
import "./App.css";

import Header from "./components/navbar/Header";
import Routes from "./routes/Routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
