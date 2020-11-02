import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Route,
  NavLink,
  Switch,
  NavNavLink,
} from "react-router-dom";
import firebase from "firebase/";

export default function WhoDoWeHelp() {
  const [data, setData] = useState();

  return (
    <div>
      <BrowserRouter>
        <h1>{}</h1>
      </BrowserRouter>
    </div>
  );
}
