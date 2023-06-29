import sprite from "../../assets/icons.svg";
import Navigation from "./Navigation";
import Socials from "./Socials";

export default function AsideMenu({ menuWidth, setMenuWidth }) {
  const closeMenu = () => {
    setMenuWidth(0);
  };
  return (
    <div className="menu" style={{ width: menuWidth }}>
      <svg
        className="menu-close"
        onClick={closeMenu}
        height="24px"
        width="24px"
      >
        <use href={sprite + "#close-dark"} />
      </svg>

      <Navigation elementClass="menu" />
      <Socials fill="#1e1823" stroke="white" elementClass="menu" />
    </div>
  );
}
