import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { personalInfo } from "../data/portfolioData";
import { motion } from "framer-motion";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  return (
    <section id="about" className="relative section-padding overflow-hidden">
      {/* Background Decor */}
      <div className="ghost-text right-0 top-20 opacity-10">ABOUT</div>

      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter">
            <span className="text-gradient">ABOUT</span>
          </h2>
          <div className="w-16 h-1.5 bg-primary rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Main Info Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 bento-card p-8 md:p-12 relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="material-symbols-outlined text-9xl">menu_book</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-black text-white mb-8 tracking-tight">
              Engineering pixel-perfect digital solutions with <span className="text-primary italic">purpose</span>.
            </h3>

            <div className="space-y-6 text-lg text-slate-400 leading-relaxed max-w-3xl">
              <p>{personalInfo.about}</p>
              <p>
                I believe that great software is built at the intersection of robust engineering and human-centric design.
                My goal is to create applications that don't just work, but delight.
              </p>
            </div>
          </motion.div>

          {/* Side Info Cards */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bento-card p-8 flex-1 bg-primary/5 border-primary/20 relative group"
            >
              <div className="absolute top-4 right-4 text-primary opacity-20 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined">format_quote</span>
              </div>
              <p className="text-xl font-bold text-white leading-relaxed italic">
                "Code is like humor. When you have to explain it, it’s bad."
              </p>
              <p className="mt-4 text-xs font-black text-primary uppercase tracking-widest">— Clean Code Mantra</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bento-card p-8 flex items-center gap-6 group hover:bg-neutral-900 transition-colors"
            >
              <div className="w-16 h-16 rounded-3xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all transform group-hover:rotate-12">
                <span className="material-symbols-outlined text-3xl">terminal</span>
              </div>
              <div>
                <h4 className="text-white font-black text-xl tracking-tight">Self-Taught</h4>
                <p className="text-slate-500 text-sm font-medium">Fueled by curiosity</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};


export default About;
