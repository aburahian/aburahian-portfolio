import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import About from "./Component/About";
import Skill from "./Component/Skill";
import Education from "./Component/Education";
import ProjectsShowcase from "./Component/ProjectsShowcase";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import ProjectDetails from "./Component/ProjectDetails";
import AllProjects from "./Component/AllProjects";
import Background from "./Component/Background";
import "./App.css";
function Home() {
  return (
    <div className="relative min-h-screen selection:bg-primary/30 selection:text-primary overflow-x-hidden">
      <Background />
      <div className="flex flex-col relative z-10">
        <Navbar />
        <main className="grow">
          <Hero />
          <About />
          <Skill />

          <Education />
          <ProjectsShowcase />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<AllProjects />} />
      <Route path="/project/:id" element={<ProjectDetails />} />
    </Routes>
  );
}

export default App;
