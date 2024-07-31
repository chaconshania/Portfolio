import styles from "./ProjectsStyles.module.css";
import webpage from "../../assets/webpage.png";
import dreamscape from "../../assets/dreamscape.png";
import ProjectCard from "../../common/ProjectCard";
import weatherApp from "../../assets/weather-app.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Featured Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={webpage}
          link={
            "https://github.uconn.edu/pages/shc19006/dmd-3470-spring-24/week-10/"
          }
          h3="Webpage"
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
