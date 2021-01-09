import "./scss/main.scss";

import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Logowanie from "./components/Logowanie";
import OddajRzeczy from "./components/OddajRzeczy";


function App() {
  return (
    <BrowserRouter>
    
      <Route exact path="/" component={Home} />
      <Route exact path="/logowanie" component={Logowanie} />
      <Route exact path="/oddaj-rzeczy" component={OddajRzeczy} />
      
    </BrowserRouter>
  );
}

export default App;
