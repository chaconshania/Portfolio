import React from "react";
import styles from "./ContentStyles.module.css";
function Content() {
  return (
    <section className={styles.container}>
      <section className={styles.intro}>
        <p>UX/UI CASE STUDY</p>
        <h1>Oasis XR</h1>
        <p>
          Oasis is an immersive XR experience where users get to connect and
          interact with their therapist calming, mindfulness activies, meditated
          through a VR headset
        </p>
        <div className={styles.stats}>
          <div className={styles.timeline}>
            <h3>Timeline</h3>
            <p>August 2024 - December 2024</p>
          </div>
          <div className={styles.tools}>
            <h3>Tools</h3>
            <p>Figma, Adobe Illustrator and Photoshop, Bezi, and Blender</p>
          </div>
          <div className={styles.Role}>
            <h3>Approach</h3>
            <p>Lead UX/UI Designer and Researcher</p>
          </div>
        </div>
      </section>
      <section className={styles.stats}></section>
      <section className={styles.problem}>
        <h2>The Problem</h2>
      </section>
      <section className={styles.goal}></section>
      <h2>Goals</h2>
      <section className={styles.impact}>
        <h2>Impact</h2>
      </section>
      <section className={styles.reflection}>
        <h2>Reflection</h2>
      </section>
    </section>
  );
}

export default Content;
