import styles from "./IntroStyles.module.css";
import heroImg from "../../../assets/hero-img.png";
import sun from "../../../assets/sun.svg";
import moon from "../../../assets/moon.svg";
import githubLight from "../../../assets/github-light.svg";
import githubDark from "../../../assets/github-dark.svg";
import linkedinLight from "../../../assets/linkedin-light.svg";
import linkedinDark from "../../../assets/linkedin-dark.svg";
import profileLight from "../../../assets/hero-img-light.png";
import profileDark from "../../../assets/hero-img-dark.png";
import CV from "../../../assets/shania-chacon-resume.pdf";
import { useTheme } from "../../../common/ThemeContext";

function Intro() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const profileImg = theme === "light" ? profileLight : profileDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={profileImg}
          id="heroImg"
          alt="Profile picture of myself"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <span className={styles.circle}></span>
        <h1>
          Shania <br />
          Chacon
        </h1>
        <h2>Designer & Developer</h2>

        <p className={styles.description}>
          As an aspiring web developer and designer, I am passionate about
          crafting innovative user experiences, design systems and interactive
          narratives for software, web and mobile products. I love bring new
          ideas to life through my designs and creations!
        </p>
        <span>
          <a href="https://github.com/chaconshania" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/shania-chacon-508a90263/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
      </div>
    </section>
  );
  /* Cover leter download
  <a href={CV} download>
    <button className="hover">Resume</button>
  </a>;
  */
}

export default Intro;
