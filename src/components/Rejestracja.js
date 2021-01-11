import React, { useState, useEffect } from "react";
import firebase from "firebase";
import decoration from "../assets/Decoration.svg";

export default function Rejestracja() {
  const [auth, setAuth] = useState({});
  const [error, setError] = useState("");
  const [userName, setUserName] = useState();

  const handleAuth = (event) => {
    setAuth({
      ...auth,
      [event.target.name]: event.target.value,
    });
  };
  const handleSignin = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(auth.email, auth.password)
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div>
      <h1>Zaloguj się</h1>
      <img src={decoration} />
      <div>
        <form>
          <label htmlFor='email'>Email</label>
          <input onChange={handleAuth} name='email' type='text' />
          <label htmlFor='password'>Hasło</label>
          <input onChange={handleAuth} name='password' type='password' />
          <label htmlFor='repeatpassword'>Powtórz Hasło</label>
          <input onChange={handleAuth} name='repeatpassword' type='password' />
        </form>
      </div>
      {auth.password === auth.repeatpassword &&
      auth.password !== undefined &&
      auth.password !== "" ? (
        <button onClick={handleSignin}>Załóż konto</button>
      ) : (
        <button disabled='true'>Załóż konto</button>
      )}
      <div>{error}</div>
    </div>
  );
}
