//This contains all the components that makes up my Home page
import Contact from "./Contact/Contact";
import Projects from "./Projects/Projects";
import Intro from "./Intro/Intro";
import Footer from "./Footer/Footer";

function Hero() {
  return (
    <>
      <Intro />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default Hero;
