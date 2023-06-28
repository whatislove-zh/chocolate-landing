import React from "react";

export default function Navigation({ elementClass }) {
  return (
    <nav>
      <ul className={elementClass + "-nav"}>
        <li className={elementClass + "-nav-item"}>
          <a className={elementClass + "-nav-link"} href="/#">
            Home
          </a>
        </li>
        <li className={elementClass + "-nav-item"}>
          <a className={elementClass + "-nav-link"} href="#how">
            How it's made?
          </a>
        </li>
        <li className={elementClass + "-nav-item"}>
          <a className={elementClass + "-nav-link"} href="#prod">
            Our products
          </a>
        </li>
        <li className={elementClass + "-nav-item"}>
          <a className={elementClass + "-nav-link"} href="#top">
            Top sellers
          </a>
        </li>
        <li className={elementClass + "-nav-item"}>
          <a className={elementClass + "-nav-link"} href="#review">
            Chocolate is loved
          </a>
        </li>
      </ul>
    </nav>
  );
}
