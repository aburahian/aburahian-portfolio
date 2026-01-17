import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../data/portfolioData";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
gsap.registerPlugin(ScrollTrigger);

const ProjectsShowcase = () => {
  return (
    <section id="projects" className="relative section-padding overflow-hidden">
      {/* Background Decor */}
      <div className="glow-mesh opacity-30"></div>
      <div className="ghost-text left-20 bottom-10 opacity-10 uppercase">Works</div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-16 h-1.5 bg-primary rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bento-card overflow-hidden h-full flex flex-col group-hover:bg-white/5 transition-all duration-500">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image || "/images/placeholder.png"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 to-transparent"></div>

                  {/* Floating Action Link */}
                  <Link
                    to={`/project/${project.id}`}
                    className="absolute bottom-6 right-6 w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 shadow-lg shadow-primary/20"
                  >
                    <span className="material-symbols-outlined font-black">arrow_outward</span>
                  </Link>
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="text-[10px] font-black text-primary uppercase tracking-widest bg-primary/10 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-black text-white mb-3 tracking-tight group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="mt-auto pt-6 border-t border-white/5">
                    <Link
                      to={`/project/${project.id}`}
                      className="text-[10px] font-black text-white uppercase tracking-[0.2em] hover:text-primary transition-colors flex items-center gap-2 group/btn"
                    >
                      Explore Case Study
                      <span className="material-symbols-outlined text-[16px] group-hover/btn:translate-x-1 transition-transform">east</span>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/projects"
              className="px-12 py-5 bento-card font-black text-xs uppercase tracking-[0.3em] flex items-center gap-4 hover:bg-white/5 group transition-all"
            >
              Launch Archive
              <span className="material-symbols-outlined text-primary group-hover:rotate-45 transition-transform">rocket_launch</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


export default ProjectsShowcase;
