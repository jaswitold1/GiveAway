import "./scss/main.scss";

import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Logowanie from "./components/Logowanie";
import OddajRzeczy from "./components/OddajRzeczy";
import UpperMenu from './components/UpperMenu'

function App() {
  return (
    <BrowserRouter>
    
      <Route exact path="/" component={Home} />
      <Route exact path="/logowanie" component={Logowanie} />
      
    </BrowserRouter>
  );
}

export default App;
