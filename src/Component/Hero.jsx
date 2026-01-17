import { useEffect, useState } from "react";
import { personalInfo } from "../data/portfolioData";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaReact, FaNodeJs, FaJs } from "react-icons/fa";

const Hero = () => {
  const roles = ["Frontend Developer", "Backend Developer", "Full Stack Developer", "Full Stack Architect", "Technical Consultant"];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden"
      onMouseMove={(e) => {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
        const root = document.documentElement;
        root.style.setProperty('--mouse-x', `${moveX}px`);
        root.style.setProperty('--mouse-y', `${moveY}px`);
      }}
    >
      {/* Background Decor */}
      <div className="glow-mesh animate-pulse-soft"></div>
      <div className="ghost-text left-20 bottom-10 opacity-10 select-none blur-[2px]">DEV</div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 h-full">

        {/* Left Card - Profile */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-4 flex justify-center lg:justify-end order-2 lg:order-1"
        >
          <div className="relative group w-64 h-80 md:w-72 md:h-96 perspective-1000">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-600 rounded-[2rem] rotate-6 group-hover:rotate-12 transition-transform duration-500 blur-xl opacity-60"></div>
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-2 border-white/10 bg-bg-card/50 backdrop-blur-md shadow-2xl flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-500">
              <img
                src="https://i.ibb.co.com/KcK0dLMC/PixVfba.jpg"
                alt={personalInfo.name}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />

              {/* Floating Badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 right-4 bg-bg-dark/80 backdrop-blur px-3 py-1 rounded-full border border-white/10 text-[10px] font-bold text-primary shadow-lg shadow-primary/20"
              >
                AVAILABLE
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Right Content - Main Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-8 flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-2 relative perspective-1000"
        >
          {/* Background Tech Logos with Parallax */}
          <div className="absolute inset-0 pointer-events-none select-none overflow-visible z-0">
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, 0],
                x: [0, 10, 0]
              }}
              style={{
                translateX: "var(--mouse-x)",
                translateY: "var(--mouse-y)"
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-10 text-cyan-500/5 text-9xl blur-[1px]"
            >
              <FaReact />
            </motion.div>
            <motion.div
              animate={{
                y: [0, 20, 0],
                rotate: [0, -10, 0],
                x: [0, -10, 0]
              }}
              style={{
                translateX: "calc(var(--mouse-x) * -1)",
                translateY: "calc(var(--mouse-y) * -1)"
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 right-20 text-green-500/5 text-8xl blur-[1px]"
            >
              <FaNodeJs />
            </motion.div>
            <motion.div
              animate={{
                x: [0, 20, 0],
                rotate: [0, 5, 0]
              }}
              style={{
                translateX: "calc(var(--mouse-x) * 0.5)",
                translateY: "calc(var(--mouse-y) * 0.5)"
              }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute top-1/2 right-0 text-yellow-500/5 text-7xl blur-[1px]"
            >
              <FaJs />
            </motion.div>
          </div>

          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold tracking-widest mb-6 uppercase z-10 backdrop-blur-sm">
            Hello, World
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter leading-tight z-10 drop-shadow-2xl">
            I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-purple-600 bg-300% animate-gradient">{personalInfo.name}</span>
          </h1>

          {/* Text Slider */}
          <div className="h-8 md:h-12 mb-6 overflow-hidden relative w-full flex justify-center lg:justify-start z-10">
            <AnimatePresence mode='wait'>
              <motion.div
                key={currentRole}
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-2xl md:text-4xl text-slate-400 font-bold absolute"
              >
                {roles[currentRole]}
              </motion.div>
            </AnimatePresence>
          </div>

          <p className="text-slate-400 text-base md:text-lg max-w-lg leading-relaxed mb-8 z-10 relative">
            {personalInfo.bio}
          </p>

          <div className="flex gap-4 z-10">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="group px-8 py-3 rounded-full bg-gradient-to-r from-primary to-blue-600 text-white font-black tracking-widest hover:scale-105 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all active:scale-95 flex items-center gap-2 overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="material-symbols-outlined text-lg relative z-10">download</span>
              <span className="relative z-10">RESUME</span>
            </a>
            <Link
              to="projects"
              smooth={true}
              className="px-8 py-3 rounded-full bg-white/5 text-white font-bold tracking-widest border border-white/10 hover:bg-white/10 hover:scale-105 hover:border-white/30 transition-all cursor-pointer backdrop-blur-sm"
            >
              PROJECTS
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      {/* Scroll Down Indicator */}
      <Link
        to="about"
        smooth={true}
        duration={500}
        offset={-50}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 cursor-pointer z-20 hover:text-primary transition-colors"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 2, repeat: Infinity }}
          className="text-slate-500 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest font-black">Scroll</span>
          <span className="material-symbols-outlined animate-bounce">keyboard_arrow_down</span>
        </motion.div>
      </Link>
    </section>
  );
};

export default Hero;
