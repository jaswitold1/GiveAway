import { Link } from "react-router-dom";
import React, { useState } from "react";
import firebase from 'firebase'

const UpperMenu = ({ handle }) => {
  firebase.auth()
  return (
    <>
      <Link to="/logowanie">Zaloguj</Link>
      <Link to="/rejestracja">Załóż Konto</Link>

      <Link to="/oddaj-rzeczy" onClick={handle}>
        Oddaj Rzeczy
      </Link>
    </>
  );
};

export default UpperMenu;
