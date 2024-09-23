import "./App.css";
import Home from "./webpages/Home/Home";
import Navbar from "./components/Navbar";
import Projects from "./webpages/Home/Projects/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Projects />
    </>
  );
}

export default App;
