import styles from "./ProjectsStyles.module.css";
import webpage from "../../../assets/appine.png";
import dreamscape from "../../../assets/dreamscape.png";

import weatherApp from "../../../assets/weather-app.png";
import luminate from "../../../assets/luminate-mockup-light.jpg";
import Project from "../../../common/Project";
import ArtsW from "../../../assets/artswestchester-logo.jpg";
import Locked from "../../../assets/locked.jpg";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">What I've worked on...</h1>
      <div className={styles.projects}>
        <Project
          src={luminate}
          h6="Case study"
          h3="Luminate: an app to help seasonal depression"
          link="https://scartswestchester.framer.website/"
          button="View work"
        />
        <Project
          src={ArtsW}
          h6="Webpage redesign"
          h3="Redesigned ArtsWestchester's  webpage"
          link="https://scartswestchester.framer.website/"
          button="View work"
        />
        <Project
          src={Locked}
          h6="Case study"
          h3="InnerSpace: transforming mental wellness through XR"
          button="Locked"
        />
      </div>
    </section>
  );
}

export default Projects;
