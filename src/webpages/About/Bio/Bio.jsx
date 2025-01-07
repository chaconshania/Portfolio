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
          Hi, I'm Shania Chacon, a passionate UX/UI Designer with a love for
          creating clean, minimalistic interfaces that deliver seamless user
          experiences. <br /> <br />
          With a background in Web/Interactive Media Design and hands-on
          experience in user research, prototyping, and front-end development, I
          bridge the gap between aesthetics and functionality. My approach
          combines design thinking, user empathy, and data-driven insights to
          craft meaningful digital experiences. <br /> <br />
          Whether it’s building intuitive websites, interactive apps, or
          impactful design solutions, I’m dedicated to solving real-world
          problems through design. Explore my projects to see how I bring ideas
          to life through thoughtful design and innovative problem-solving.
        </p>
      </div>
    </section>
  );
}

export default Bio;
