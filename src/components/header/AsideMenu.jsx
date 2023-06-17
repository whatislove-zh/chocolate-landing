import closeButton from "../../assets/x.svg";
import Navigation from "./Navigation";
import Socials from "./Socials";

export default function AsideMenu() {
  return (
    <div className="menu">
      <img className="menu-close" src={closeButton} alt="close" />
      <Navigation elementClass="menu" />
      <Socials fill="#1e1823" stroke="white" elementClass="menu" />
    </div>
  );
}
