import closeButton from "../../assets/x.svg";
import Navigation from "./Navigation";
import Socials from "./Socials";

export default function AsideMenu({ menuWidth, setMenuWidth }) {
  const closeMenu = () => {
    setMenuWidth(0);
  };
  return (
    <div className="menu" style={{ width: menuWidth }}>
      <img
        onClick={closeMenu}
        className="menu-close"
        src={closeButton}
        alt="close"
      />
      <Navigation elementClass="menu" />
      <Socials fill="#1e1823" stroke="white" elementClass="menu" />
    </div>
  );
}
