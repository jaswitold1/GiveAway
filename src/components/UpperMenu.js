import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

import Logowanie from "./Logowanie";
import Rejestracja from "./Rejestracja";

const UpperMenu = () => {
  return (
    <BrowserRouter>
      <Link to="/logowanie">Zaloguj</Link>
      <Link to="/rejestracja">Załóż Konto</Link>
      <Route path="/logowanie" component={Logowanie} />
      <Route path="/rejestracja" component={Rejestracja} />
    </BrowserRouter>
  );
};

export default UpperMenu;
