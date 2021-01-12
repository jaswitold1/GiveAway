import { NavLink } from "react-router-dom";

import firebase from "firebase";
import { useState, useEffect } from "react";

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
      {username == "" ? (
        <div className='upperMenu'>
          <NavLink to='/'>Main page</NavLink>
          <NavLink to='/logowanie'>Log In</NavLink>
          <NavLink to='/rejestracja'>Create an Account</NavLink>
        </div>
      ) : (
        <div className='upperMenu'>
          <div>Welcome {username}</div>
          <NavLink to='/'>Main page</NavLink>
          <NavLink onClick={handleSignOut} to='/wylogowano'>
            Log Out
          </NavLink>
          <NavLink to='/oddaj-rzeczy'>Give stuff away !</NavLink>
        </div>
      )}
    </>
  );
};

export default UpperMenu;
