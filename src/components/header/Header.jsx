import React, { useRef, useState } from "react";
import logo from "../../assets/logo.svg";
import burger from "../../assets/menu-03.svg";
import Navigation from "./Navigation";
import Socials from "./Socials";
import AsideMenu from "./AsideMenu";

export default function Header() {
  const [menuWidth, setMenuWidth] = useState(0);
  const headerRef = useRef();

  const showMobileMenu = () => {
    setMenuWidth(headerRef.current.clientWidth > 375 ? 290 : 220);
  };

  return (
    <header ref={headerRef} className="header">
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
      <AsideMenu menuWidth={menuWidth} setMenuWidth={setMenuWidth} />
    </header>
  );
}
