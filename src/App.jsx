import About from "./components/About.jsx";
import AvailableFor from "./components/AvailableFor.jsx";
import Contact from "./components/Contact.jsx";
import CoreExpertise from "./components/CoreExpertise.jsx";
import ExperienceHighlights from "./components/ExperienceHighlights.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-mist text-ink">
      <Navbar />
      <main>
        <Hero />
        <AvailableFor />
        <About />
        <CoreExpertise />
        <Skills />
        <Projects />
        <ExperienceHighlights />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
