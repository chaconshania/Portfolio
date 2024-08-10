import styles from "./SkillsStyles.module.css";
import aboutImg from "../../assets/about_me.png";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <div className="About-me-description">
        <h1 className="sectionTitle">About Me</h1>
        <p className="description">
          Based in CT, I am currently a student at the University of Connecticut
          for a BFA in Digital Media Design, with a concentration in
          Web/Interactive Media Design. I am passionate about web development
          and proficient in front-end technologies such as HTML5, CSS,
          JavaScript, React, and Bootstrap. <br /> <br />I love to travel and
          draw whatever comes in mind, and I take every opportunity to take
          pictures of my friends and any adorable animal!
        </p>
      </div>
      <img src={aboutImg} alt="A picture of me holding ice cream" />
    </section>
  );
}

export default Skills;
