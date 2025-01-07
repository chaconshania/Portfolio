import styles from "./FooterStyles.module.css";
import githubIcon from "../../assets/github-light.svg";
import linkedinIcon from "../../assets/linkedin-light.svg";
import behanceIcon from "../../assets/behance-dark.jpg";
function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <div className={styles.navfooter}>
        <div className={styles.branding}>
          <h3>SHANIA CHACON</h3>
          <p>FIND ME ON MY SOCIALS!</p>
          <div className={styles.socials}>
            <a href="https://github.com/chaconshania" target="_blank">
              <img src={githubIcon} alt="Github icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/shania-chacon-508a90263/"
              target="_blank"
            >
              <img src={linkedinIcon} alt="Linkedin icon" />
            </a>
            <a href="https://www.behance.net/shaniachacon" target="_blank">
              <img src={behanceIcon} alt="Behance icon" />
            </a>
          </div>
        </div>
        <div></div>
        <div className={styles.navigation}>
          <h3>EXPLORE</h3>
          <p>UX CASE STUDIES</p>
          <p>GRAPHIC DESIGN</p>
          <p>ABOUT</p>
          <p>CONTACT</p>
        </div>
      </div>

      <div className={styles.copywrite}>
        <p>
          &copy; 2024 CODED & DESIGNED BY ME <br />
        </p>
      </div>
    </section>
  );
}

export default Footer;
