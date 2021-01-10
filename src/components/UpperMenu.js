import { Link,NavLink } from "react-router-dom";

import firebase from 'firebase'

const UpperMenu = () => {
  firebase.auth()
  return (
    <>
      <NavLink to="/logowanie">Zaloguj</NavLink>
      <NavLink to="/rejestracja">Załóż Konto</NavLink>
      <NavLink to='/wylogowano'>Wyloguj się</NavLink>
       <NavLink to="/oddaj-rzeczy" >
        Oddaj Rzeczy
      </NavLink>

      
    </>
  );
};

export default UpperMenu;
