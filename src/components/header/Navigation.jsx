import React from "react";

export default function Navigation({ elementClass }) {
  console.log(elementClass);
  return (
    <nav>
      <ul className={elementClass + "-nav"}>
        <li className={elementClass + "-nav-item"}>
          <a className={elementClass + "-nav-link"} href="/#">
            Home
          </a>
        </li>
        <li className={elementClass + "-nav-item"}>
          <a className={elementClass + "-nav-link"} href="/#">
            How it's made?
          </a>
        </li>
        <li className={elementClass + "-nav-item"}>
          <a className={elementClass + "-nav-link"} href="/#">
            Our products
          </a>
        </li>
        <li className={elementClass + "-nav-item"}>
          <a className={elementClass + "-nav-link"} href="/#">
            Top sellers
          </a>
        </li>
        <li className={elementClass + "-nav-item"}>
          <a className={elementClass + "-nav-link"} href="/#">
            Chocolate is loved
          </a>
        </li>
      </ul>
    </nav>
  );
}
