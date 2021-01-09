import { Link } from "react-router-dom";

import firebase from 'firebase'

const UpperMenu = () => {
  firebase.auth()
  return (
    <>
      <Link to="/logowanie">Zaloguj</Link>
      <Link to="/rejestracja">Załóż Konto</Link>
      <Link to='/wylogowano'>Wyloguj się</Link>
       <Link to="/oddaj-rzeczy" >
        Oddaj Rzeczy
      </Link>

      
    </>
  );
};

export default UpperMenu;
