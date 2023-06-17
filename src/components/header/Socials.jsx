import React from "react";
import Instagram from "../../assets/instagram";
import Twitter from "../../assets/twitter";

//import twitter from "../../assets/twitter.svg";

export default function Socials({ elementColor, elementClass }) {
  return (
    <div className={elementClass + "-socials"}>
      <a className="instagram-logo" href="https:\\instagram.com">
        <Instagram fill="white" stroke="black" />
      </a>
      <a className="twitter-logo" href="https:\\twitter.com">
        <Twitter fill="white" stroke="black" />
      </a>
    </div>
  );
}
