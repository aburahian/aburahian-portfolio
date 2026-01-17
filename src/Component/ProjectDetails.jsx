import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { projects } from "../data/portfolioData";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg-dark text-white">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-black text-white/50">404</h2>
          <p className="text-xl font-bold text-white">Project not found</p>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full font-bold hover:bg-primary hover:text-white transition-all"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-dark selection:bg-primary/30 selection:text-primary flex flex-col">
      <Navbar />

      <main className="grow pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Background Decor */}
        <div className="glow-mesh opacity-20"></div>
        <div className="ghost-text right-0 top-32 opacity-[0.03]">PROJECT</div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.button
            onClick={() => navigate(-1)}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-slate-500 hover:text-primary mb-12 transition-colors group font-bold text-sm tracking-widest uppercase"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            {/* Header Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Image Card */}
              <div className="bento-card p-2 rounded-[2rem] overflow-hidden group">
                <div className="relative overflow-hidden rounded-[1.5rem] aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Info Card */}
              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
                    {project.title}
                  </h1>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-black text-primary bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full uppercase tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-lg text-slate-400 leading-relaxed border-l-2 border-primary/20 pl-6">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="px-8 py-3 bg-primary text-white rounded-full font-black text-xs uppercase tracking-widest hover:scale-105 hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95 flex items-center gap-2"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="px-8 py-3 bg-white/5 text-white border border-white/10 rounded-full font-black text-xs uppercase tracking-widest hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-2"
                  >
                    <FaGithub className="text-lg" /> Source Code
                  </a>
                </div>
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bento-card p-8 group hover:bg-white/5 transition-colors">
                <div className="mb-6 w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-2xl">warning</span>
                </div>
                <h2 className="text-xl font-black text-white mb-4 uppercase tracking-wide">
                  Challenges Faced
                </h2>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {project.challenges}
                </p>
              </div>

              <div className="bento-card p-8 group hover:bg-white/5 transition-colors">
                <div className="mb-6 w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-2xl">rocket_launch</span>
                </div>
                <h2 className="text-xl font-black text-white mb-4 uppercase tracking-wide">
                  Future Plans
                </h2>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {project.futurePlans}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetails;

