import React from "react";
import logo from "../../assets/logo.svg";
import burger from "../../assets/menu-03.svg";
import Navigation from "./Navigation";
import Socials from "./Socials";
import AsideMenu from "./AsideMenu";

export default function Header() {
  const showMobileMenu = () => {};
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <a href="/home">
            <img className="header-logo" src={logo} alt="logo" />
          </a>
          <Navigation elementClass="header" />
          <Socials fill="white" stroke="black" elementClass="header" />
          <img
            onClick={showMobileMenu}
            className="header-burger"
            src={burger}
            alt="burger-menu"
          />
        </div>
      </div>
      <AsideMenu />
    </header>
  );
}
