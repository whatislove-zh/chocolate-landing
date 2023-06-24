import React from "react";
import Navigation from "../header/Navigation";
import Socials from "../header/Socials";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-block">
            <h2 className="footer-header common-header">
              <span className="orange-text">Chocolate </span>a delicious cure
              for a bad day
            </h2>
            <div className="footer-contacts-block">
              <div className="footer-contacts">
                <h2 className="contact-header">Contact us</h2>
                <a href="tel:+380(68)4439426" className="telephone">
                  +380 (68) 443-94-26
                </a>
                <a href="mailto:simplychoc@gmail.com" className="email">
                  simplychoc@gmail.com
                </a>
              </div>
              <Socials fill="#1e1823" stroke="white" elementClass="footer" />
            </div>
          </div>
          <hr />
          <Navigation elementClass="footer" />
        </div>
      </div>
    </footer>
  );
}
