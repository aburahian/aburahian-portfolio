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
import "./App.css";
function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-sans text-slate-900 dark:text-white transition-colors duration-300">
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
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:id" element={<ProjectDetails />} />
    </Routes>
  );
}

export default App;
