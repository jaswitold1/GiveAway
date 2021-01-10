import "./scss/main.scss";

import { BrowserRouter, Route, Na } from "react-router-dom";
import Home from "./components/Home";
import Logowanie from "./components/Logowanie";
import OddajRzeczy from "./components/OddajRzeczy";


function App() {
  return (
    <BrowserRouter>
    
      <Route path="/" component={Home} />
      <Route path="/logowanie" component={Logowanie} />
      <Route path="/oddaj-rzeczy" component={OddajRzeczy} />
      
    </BrowserRouter>
  );
}

export default App;
