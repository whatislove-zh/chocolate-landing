import React from "react";
import logo from "../../assets/logo.svg";
import burger from "../../assets/menu-03.svg";
import Navigation from "./Navigation";
import Socials from "./Socials";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <img className="header-logo" src={logo} alt="logo" />
          <Navigation elementClass="header" />
          <Socials elementColor="black" elementClass="header"  />
          <img className="header-burger" src={burger} alt="burger-menu" />
        </div>
      </div>
    </header>
  );
}
