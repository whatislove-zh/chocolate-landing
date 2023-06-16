import React from "react";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";

export default function Socials() {
  return <div className="socials">
    <img className="instagram-logo" src={instagram} alt="instagram" />
    <img className="twitter-logo" src={twitter} alt="twitter" />
  </div>;
}
