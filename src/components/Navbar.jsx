import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavbarStyles.module.css";

const Navbar = () => {
  return (
    <section id="navbar" className={styles.container}>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand px-2" to="/">
            S C
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link className={"link-styles px-2"} to="/">
                Home
              </Link>
              <Link className={"link-styles px-2"} to="/about">
                About
              </Link>
              <Link className={"link-styles px-2"} to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
