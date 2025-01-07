import styles from "./ProjectsStyles.module.css";
import luminate from "../../../assets/luminate-mockup-light.jpg";
import Project from "../../../common/Project";
import ArtsW from "../../../assets/artswestchester-logo.jpg";
import Locked from "../../../assets/locked.jpg";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">PROJECT HIGHLIGHTS</h1>
      <div className={styles.projects}>
        <Project
          src={Locked}
          h6="Case study"
          h3="Oasis XR: transforming mental wellness through XR"
          link="/casestudies/oasis"
          button="View work"
        />
        <Project
          src={luminate}
          h6="Case study"
          h3="Fit Mix: an app to help lessen seasonal depression"
          link="/casestudies/fitmix"
          button="View work"
        />
        <Project
          src={ArtsW}
          h6="Webpage redesign"
          h3="Redesigned ArtsWestchester's  webpage"
          link="https://scartswestchester.framer.website/"
          button="View work"
        />
      </div>
    </section>
  );
}

export default Projects;
