import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Navbar from "../../../common/Navbar/Navbar";
import Intro from "../../../Pages/Hero/Intro/Intro";

function Hero() {
  return (
    <>
      <Navbar />
      <Intro />
      <Projects />
      <Contact />
    </>
  );
}

export default Hero;
