import React, {  useState } from "react";
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
        <h1>Komu Pomagamy?</h1>
        <img src={decoration} />
        <div>
          <button onClick={isClickedToggle} name="fund">
            Fundacjom
          </button>
          <button onClick={isClickedToggle} name="govs">
            Organizacjom pozarządowym
          </button>
          <button onClick={isClickedToggle} name="local">
            Lokalnym zbiórkom
          </button>
        </div>
      </div>
      {isClicked.fund ? <Foundations /> : ""}
      {isClicked.govs ? <Govs /> : ""}
      {isClicked.local ? <Locals /> : ""}
    </>
  );
}
