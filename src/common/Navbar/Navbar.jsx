import styles from "./NavbarStyles.module.css";
import { Link } from "react-router-dom";
export const NavBar = () => {
  return (
    <div>
      <link to="/">Home</link>
      <link to="/about">About</link>
      <link to="/contact">Contact</link>
    </div>
  );
};

export default NavBar;
