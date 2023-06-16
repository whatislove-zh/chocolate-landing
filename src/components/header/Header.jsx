import React from "react";
import logo from "../../assets/logo.svg";
import burger from "../../assets/menu-03.svg";
import Navigation from "./Navigation";
import Socials from "./Socials";

export default function Header() {
  return (
    <header className="header">
      <img className="header-logo" src={logo} alt="logo" />
      <Navigation elementClass="header" />
      <Socials />
      <img className="header-burger" src={burger} alt="burger-menu" />
    </header>
  );
}
