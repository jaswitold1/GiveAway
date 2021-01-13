import React, { useState } from "react";
import decoration from "../assets/Decoration.svg";
import Foundations from "./Foundations";
import Govs from "./Govs";
import Locals from "./Locals";

export default function WhoDoWeHelp() {
  const [isClicked, setIsClicked] = useState({
    fund: true,
  });

  const isClickedToggle = (event) => {
    setIsClicked({
      [event.target.name]: true,
    });
  };
  return (
    <>
      <div>
        <h1>Who do we help?</h1>
        <img src={decoration} />
        <div>
          <button onClick={isClickedToggle} name='fund'>
            Foundations
          </button>
          <button onClick={isClickedToggle} name='local'>
            Local donations
          </button>
          <button onClick={isClickedToggle} name='govs'>
            Government organisations
          </button>
        </div>
      </div>
      <p>
        In our database You can find all Foundations we collaborate with. You
        can see what they do, who do they help and what do they need.
      </p>
      {isClicked.fund ? <Foundations /> : ""}
      {isClicked.govs ? <Govs /> : ""}
      {isClicked.local ? <Locals /> : ""}
    </>
  );
}
