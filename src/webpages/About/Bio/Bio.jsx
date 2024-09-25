import React from "react";
import styles from "./BioStyles.module.css";
import profileImg from "../../../assets/hero-img-light.png";
import profileDark from "../../../assets/hero-img-dark.png";
function Bio() {
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={profileImg}
          id="heroImg"
          alt="Profile picture of myself"
        />
      </div>
      <div className={styles.info}>
        <span className={styles.circle}></span>
        <h1>About Me</h1>

        <p className={styles.description}>
          Based in CT, I am currently a student at the University of Connecticut
          for a BFA in Digital Media Design, with a concentration in
          Web/Interactive Media Design. I am passionate about web development
          and proficient in front-end technologies such as HTML5, CSS,
          JavaScript, React, and Bootstrap. <br /> <br />I love to travel and
          draw whatever comes in mind, and I take every opportunity to take
          pictures of my friends and any adorable animal!
        </p>
      </div>
    </section>
  );
}

export default Bio;
