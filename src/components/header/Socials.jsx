import sprite from "../../assets/icons.svg";

export default function Socials({ fill, stroke, elementClass }) {
  return (
    <div className={elementClass + "-socials"}>
      <a className="instagram-logo" href="https:\\instagram.com">
        <svg fill={fill} stroke={stroke} height="24px" width="24px">
          <use href={sprite + "#instagram"} />
        </svg>
      </a>
      <a className="twitter-logo" href="https:\\twitter.com">
        <svg fill={fill} stroke={stroke} height="24px" width="24px">
          <use href={sprite + "#twitter"} />
        </svg>
      </a>
    </div>
  );
}
