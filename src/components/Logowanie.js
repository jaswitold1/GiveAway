import React, { useState } from "react";
import firebase from 'firebase'
import decoration from '../assets/Decoration.svg'



export default
  function Logowanie() {

    const [auth,setAuth] = useState({})

    const handleAuth = (event) => {
      setAuth(
        {
          ...auth,
          [event.target.name]:event.target.value
        }
      )
    }

    
  return <div>
    <h1>Zaloguj się</h1>
    <img src={decoration}/>
    <div>
      <form>
        <label htmlFor="email">Email</label>
        <input onChange={handleAuth} name='email' type="text"/>
        <label htmlFor="password">Hasło</label>
        <input onChange={handleAuth} name='password' type="password"/>
        <label  htmlFor="repeatpassword">Powtórz Hasło</label>
        <input onChange={handleAuth} name='repeatpassword' type="password"/>
      </form>
    </div>
  </div>;
}

