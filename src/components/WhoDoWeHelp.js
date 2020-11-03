import React, { useEffect, useState } from "react";
import decoration from "../assets/Decoration.svg";
import Foundations from "./Foundations";
import Govs from "./Govs";
import Locals from "./Locals";
import {
  BrowserRouter,
  Route,
  NavLink,
  Switch,
  NavNavLink,
} from "react-router-dom";

export default function WhoDoWeHelp() {
  const [isClicked, setIsClicked] = useState({
    fund: true,
  });
  const [data, setData] = useState([
    {
      fundacje: [
        {
          nazwa: "Dbam o zdrowie",
          cel:
            "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
          co: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
        },
        {
          nazwa: "Dbam o zdrowie1",
          cel:
            "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
          co: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
        },
        {
          nazwa: "Dbam o zdrowie2",
          cel:
            "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
          co: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
        },
        {
          nazwa: "Dbam o zdrowie",
          cel:
            "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
          co: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
        },
        {
          nazwa: "Dbam o zdrowie",
          cel:
            "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
          co: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
        },
        {
          nazwa: "Dbam o zdrowie",
          cel:
            "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
          co: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
        },
        {
          nazwa: "Dbam o zdrowie",
          cel:
            "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
          co: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
        },
        {
          nazwa: "Dbam o zdrowie",
          cel:
            "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
          co: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
        },
        {
          nazwa: "Dbam o zdrowie",
          cel:
            "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
          co: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
        },
      ],
    },
  ]);

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
      {isClicked.fund ? <Foundations data={data} /> : ""}
      {isClicked.govs ? <Govs /> : ""}
      {isClicked.local ? <Locals /> : ""}
    </>
  );
}
