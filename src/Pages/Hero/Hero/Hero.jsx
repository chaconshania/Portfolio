import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Navbar from "../../../common/Navbar/Navbar";
import Intro from "../../../Pages/Hero/Intro/Intro";
import Footer from "../Footer/Footer";

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
