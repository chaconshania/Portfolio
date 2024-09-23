import React from "react";
import styles from "./BioStyles.module.css";
import aboutImg from "../../../assets/hero-img-light.png";
function Bio() {
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.about}>
        <div>
          <h1 className="sectionTitle">About me</h1>
          <p className={styles.description}>
            Based in CT, I am currently a student at the University of
            Connecticut for a BFA in Digital Media Design, with a concentration
            in Web/Interactive Media Design. I am passionate about web
            development and proficient in front-end technologies such as HTML5,
            CSS, JavaScript, React, and Bootstrap. <br /> <br />I love to travel
            and draw whatever comes in mind, and I take every opportunity to
            take pictures of my friends and any adorable animal!
          </p>
        </div>
        <div>
          <h1 className="sectionTitle">About me</h1>

          <p className={styles.description}>
            Based in CT, I am currently a student at the University of
            Connecticut for a BFA in Digital Media Design, with a concentration
            in Web/Interactive Media Design. I am passionate about web
            development and proficient in front-end technologies such as HTML5,
            CSS, JavaScript, React, and Bootstrap. <br /> <br />I love to travel
            and draw whatever comes in mind, and I take every opportunity to
            take pictures of my friends and any adorable animal!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Bio;
