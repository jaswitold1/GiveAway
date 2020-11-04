import React from "react";
import facebook from "../assets/Facebook.svg";
import instagram from "../assets/Instagram.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div></div>
      <span>Copyright by CodersLab</span>
      <div>
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
      </div>
    </div>
  );
}
