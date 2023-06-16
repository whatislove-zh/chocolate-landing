import React from "react";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";

export default function Socials({elementColor, elementClass}) {
  return <div className={elementClass +"-socials"}>
    <img className={"instagram-logo-" + elementColor} src={instagram} alt="instagram" />
    <img className={"twitter-logo-" + elementColor} src={twitter} alt="twitter" />
  </div>;
}
