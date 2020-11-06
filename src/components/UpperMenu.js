import { Link } from "react-router-dom";
import React, { useState } from "react";

const UpperMenu = ({ handle }) => {
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
