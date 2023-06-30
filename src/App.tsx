import About from "./components/About";
import Education from "./components/Education";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Features />
      <About />
      <Education />
      <Projects />
      <Footer />
      <div className="bg-element -left-[250px] top-[80px] bg-cyan-700 opacity-35"></div>
      <div className="bg-element -right-[270px] top-[350px] bg-cyan-400 opacity-30"></div>
    </>
  );
}

export default App;
