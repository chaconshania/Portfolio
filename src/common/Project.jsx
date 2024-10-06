import styles from "./ProjectStyles.module.css";
function Project({ src, link, h3, p, h6 }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className={styles.projectCard}>
        <img src={src} alt="Project visual" />
        <div className={styles.cardBody}>
          <h6>{h6}</h6>
          <h3>{h3}</h3>
          <p>{p}</p>
          <button>View</button>
        </div>
      </div>
    </a>
  );
}

export default Project;
