import React from "react";
import decoration from "../assets/Decoration.svg";
import { useHistory } from "react-router";

function Wyloguj() {
  let history = useHistory();
  setTimeout(() => {
    history.push("/");
  }, 2000);

  return (
    <div className='logout'>
      <h1>Succesfully Logged Out !</h1>
      <p>Redirecting...</p>
      <img src={decoration} alt='decoration' />
    </div>
  );
}

export default Wyloguj;
