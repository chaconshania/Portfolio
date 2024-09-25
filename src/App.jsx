import "./App.css";
import Home from "./webpages/Home/Home";
import Navbar from "./components/Navbar";
import Projects from "./webpages/Home/Projects/Projects";
import Footer from "./common/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
