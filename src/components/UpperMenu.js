import { NavLink } from "react-router-dom";

import firebase from "firebase";
import { useState, useEffect } from "react";
import { useStore } from "react-redux";

const UpperMenu = () => {
  const [username, setUsername] = useState();
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setUsername(user.email);
    } else {
      setUsername("");
    }
  });
  const handleSignOut = () => {
    firebase.auth().signOut();
  };

  return (
    <>
      <NavLink to='/'>Strona główna</NavLink>
      <NavLink to='/logowanie'>Zaloguj</NavLink>
      <NavLink to='/rejestracja'>Załóż Konto</NavLink>
      <div>{username}</div>
      <NavLink onClick={handleSignOut} to='/wylogowano'>
        Wyloguj się
      </NavLink>
      <NavLink to='/oddaj-rzeczy'>Oddaj Rzeczy</NavLink>
    </>
  );
};

export default UpperMenu;
