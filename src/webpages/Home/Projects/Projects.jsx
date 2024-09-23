import styles from "./ProjectsStyles.module.css";
import webpage from "../../../assets/appine.png";
import dreamscape from "../../../assets/dreamscape.png";
import ProjectCard from "../../../common/ProjectCard";
import weatherApp from "../../../assets/weather-app.png";
import luminate from "../../../assets/luminate.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Featured Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={luminate}
          link={
            "https://www.figma.com/proto/xKRz53at2S06J7oAC1iqFX/Prototype?page-id=0%3A1&node-id=534-3190&viewport=773%2C-71%2C0.09&t=1g6EbonLmRcv0Avp-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A100"
          }
          h3="Luminate"
          p="UX/UI Prototype"
        />
        <ProjectCard
          src={webpage}
          link={
            "https://github.uconn.edu/pages/shc19006/dmd-3470-spring-24/week-10/"
          }
          h3="Appine"
          p="Coded with HTML, CSS & Bootstrap"
        />
        <ProjectCard
          src={dreamscape}
          link={
            "https://drive.google.com/file/d/1Txa10TPSE18nPIHkUMPqVWBNtQqfll2p/view?usp=sharing"
          }
          h3="DreamScape"
          p="Coded with HTML, CSS & React"
        />
        <ProjectCard
          src={weatherApp}
          link={"https://shania-app.netlify.app/"}
          h3="Weather App"
          p="Real-Time Weather Application"
        />
      </div>
    </section>
  );
}

export default Projects;
