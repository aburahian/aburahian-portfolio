import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "../data/portfolioData";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");

  const navLinks = [
    { name: "Home", to: "hero", icon: "home" },
    { name: "About", to: "about", icon: "person" },
    { name: "Skills", to: "skills", icon: "terminal" },
    { name: "Journey", to: "experience", icon: "history_edu" },
    { name: "Works", to: "projects", icon: "grid_view" },
    { name: "Contact", to: "contact", icon: "alternate_email" },
  ];

  return (
    <>
      {/* Top Bar (Navigation & Branding) */}
      <nav className="fixed top-0 w-full z-50 bg-bg-dark/80 backdrop-blur-xl border-b border-white/5 h-20 flex items-center px-6 md:px-12 justify-between">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="group flex items-center gap-2 text-xl font-black tracking-tighter cursor-pointer"
        >
          <span className="text-primary">&lt;</span>
          <span className="text-white group-hover:text-primary transition-colors">
            {personalInfo.name.split(" ")[0]}
          </span>
          <span className="text-primary">/&gt;</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-2 bg-white/5 p-1.5 rounded-2xl border border-white/5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              onSetActive={() => setActiveSection(link.to)}
              className="group relative cursor-pointer"
            >
              <div className={`px-5 py-2.5 rounded-xl transition-all duration-300 flex items-center gap-2 ${activeSection === link.to
                ? "bg-primary text-white shadow-lg shadow-primary/20"
                : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}>
                <span className="material-symbols-outlined text-[20px]">{link.icon}</span>
                <span className="text-[10px] font-black uppercase tracking-widest">{link.name}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-4 border-r border-white/10 pr-6 mr-2">
            <a href={`https://wa.me/${personalInfo.whatsapp}`} className="text-slate-400 hover:text-green-500 transition-colors">
              <span className="material-symbols-outlined text-xl">chat</span>
            </a>
            <a href={personalInfo.socials.github} className="text-slate-400 hover:text-white transition-colors">
              <span className="material-symbols-outlined text-xl">code</span>
            </a>
          </div>
          <Link
            to="contact"
            smooth={true}
            className="px-6 py-2.5 rounded-full bg-primary text-white hover:scale-105 active:scale-95 transition-all text-[10px] font-black tracking-[0.2em] border border-primary/20"
          >
            HIRE ME
          </Link>
        </div>
      </nav>

      {/* Bottom Tab Bar (Mobile Only) */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md z-50 md:hidden bg-bg-card backdrop-blur-2xl border border-white/10 rounded-3xl p-2 shadow-2xl">
        <div className="flex justify-around items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              onSetActive={() => setActiveSection(link.to)}
              className="cursor-pointer"
            >
              <div className={`p-3 rounded-2xl transition-all duration-300 ${activeSection === link.to
                ? "bg-primary text-white scale-110"
                : "text-slate-500"
                }`}>
                <span className="material-symbols-outlined text-2xl">{link.icon}</span>
              </div>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};



export default Navbar;
