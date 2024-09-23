import Navbar from "../../components/Navbar";
import styles from "./ContactStyles.module.css";

function Contact() {
  return (
    <div>
      <Navbar />
      <section id="contact" className={styles.container}>
        <div className={styles.contactHeading}>
          <h1>Let's collaborate & make something extraordinary together</h1>
        </div>
        <div className={styles.row}>
          <div className={styles.card}>
            <p>Something</p>
          </div>
          <div className={styles.card}>
            <p>Something</p>
          </div>
          <div className={styles.card}>
            <p>Something</p>
          </div>
          <div className={styles.card}>
            <p>Something</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
