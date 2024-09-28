import styles from "./HeroStyles.module.css";

function Hero() {
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.info}>
        <h1>Let's Collaborate & Make Something Extraordinary Together</h1>
        <form action="https://formspree.io/f/mjkbwkod" method="post">
          <div className="formGroup">
            <label htmlFor="name" hidden>
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              required
            ></input>
          </div>
          <div className="formGroup">
            <label htmlFor="email" hidden>
              email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              required
            ></input>
          </div>
          <div className="formGroup">
            <label htmlFor="message" hidden>
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              required
            ></textarea>
          </div>
          <input className="hover btn" type="submit" value="SUBMIT" />
        </form>
      </div>
    </section>
  );
}

export default Hero;
