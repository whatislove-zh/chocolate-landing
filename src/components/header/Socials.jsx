import React from "react";
import Instagram from "../../assets/instagram";
import Twitter from "../../assets/twitter";

export default function Socials({ fill, stroke, elementClass }) {
  return (
    <div className={elementClass + "-socials"}>
      <a className="instagram-logo" href="https:\\instagram.com">
        <Instagram fill={fill} stroke={stroke} />
      </a>
      <a className="twitter-logo" href="https:\\twitter.com">
        <Twitter fill={fill} stroke={stroke} />
      </a>
    </div>
  );
}
