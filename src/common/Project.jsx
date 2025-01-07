import styles from "./ProjectStyles.module.css";
import { Link } from "react-router-dom";
function Project({ src, link, h3, p, h6, button }) {
  return (
    <div className={styles.projectCard}>
      <img src={src} alt="Project visual" />
      <div className={styles.cardBody}>
        <h6>{h6}</h6>
        <h3>{h3}</h3>
        <p>{p}</p>
        <Link to={link}>
          <button>{button}</button>
        </Link>
      </div>
    </div>
  );
}

export default Project;
