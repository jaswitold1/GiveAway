import "./scss/main.scss";

import { BrowserRouter,Route } from "react-router-dom";

import Home from "./components/Home";
import Logowanie from "./components/Logowanie";
import OddajRzeczy from "./components/OddajRzeczy";
import Rejestracja from "./components/Rejestracja"


function App() {
  return (
    <BrowserRouter>
    
    
        <Route  path="/" component={Home} />
      
      
     

      
    </BrowserRouter>
  );
}

export default App;
