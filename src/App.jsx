
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Particles from "./components/Particles";
import Languages from "./components/Languages";
import EducationMap from "./components/Education";
import MiniNav from "./components/MiniNav";
export default function App() {
  return (
    <>
      <Particles/>
      <MiniNav/>
      <Hero />
       <About />
       <Skills/>
       <Languages/>
       <EducationMap/>
       <Projects/>
       <Timeline/>
       <Contact/>
       <Footer/>
    </>
  );
}


