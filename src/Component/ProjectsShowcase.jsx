import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../data/portfolioData";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
gsap.registerPlugin(ScrollTrigger);

const ProjectsShowcase = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  // use `projects` from data file
  const projectList = projects;

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Filter out null refs just in case
      const validCards = cardsRef.current.filter(card => card !== null);

      if (validCards.length > 0) {
        // Set initial state to avoid FOUC
        gsap.set(validCards, { y: 80, opacity: 0, scale: 0.9 });

        // Animate to final state
        gsap.to(validCards, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none none", // Play once and stay
          },
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.2, // Increased stagger slightly
          ease: "back.out(1.2)",
        });
      }
    }, sectionRef);

    // Refresh ScrollTrigger to ensure positions are correct after layout updates
    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  const handleCardHover = (index, isHovering) => {
    gsap.to(cardsRef.current[index], {
      y: isHovering ? -10 : 0,
      scale: isHovering ? 1.02 : 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 bg-slate-50 dark:bg-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {!projectList ? (
            <>Loading ...</>
          ) : (
            projectList.map((project, index) => (
              <div
                key={project.id}
                ref={(el) => (cardsRef.current[index] = el)}
                onMouseEnter={() => handleCardHover(index, true)}
                onMouseLeave={() => handleCardHover(index, false)}
                className="group cursor-pointer bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image || "/images/placeholder.png"}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link
                      to={`/project/${project.id}`}
                      className="px-6 py-2 bg-white text-slate-900 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    >
                      View Details
                    </Link>
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {Array.isArray(project.techStack) &&
                      project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}

                    {Array.isArray(project.techStack) &&
                      project.techStack.length > 3 && (
                        <span className="text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                          +{project.techStack.length - 3}
                        </span>
                      )}
                  </div>

                  <Link
                    to={`/project/${project.id}`}
                    className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                  >
                    Read More <FaArrowRight />
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
