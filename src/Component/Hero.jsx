import { useEffect, useRef } from "react";
import gsap from "gsap";
import { personalInfo } from "../data/portfolioData";
import { motion } from "framer-motion";

import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const imageRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation - split text effect
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
      });

      // Subtitle animation
      gsap.from(subtitleRef.current, {
        opacity: 0,
        x: -30,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.5,
      });

      // Image floating animation
      gsap.to(imageRef.current, {
        y: -20,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Button pulse animation
      gsap.to(buttonRef.current, {
        scale: 1.05,
        duration: 1.5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark pt-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <h2
            ref={subtitleRef}
            className="text-xl md:text-2xl font-medium text-primary mb-2"
          >
            Hello, I&apos;m
          </h2>
          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold text-slate-800 dark:text-white mb-4"
          >
            {personalInfo.name}
          </h1>
          <h3 className="text-2xl md:text-3xl font-semibold text-slate-600 dark:text-slate-300 mb-6">
            {personalInfo.designation}
          </h3>
          <p className="text-lg text-slate-500 dark:text-slate-400 mb-8 max-w-lg mx-auto md:mx-0">
            {personalInfo.introduction}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              ref={buttonRef}
              href={personalInfo.resumeUrl}
              className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
            >
              Download Resume
            </a>
            <div className="flex gap-4 items-center justify-center">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="text-2xl text-slate-600 dark:text-slate-400 hover:text-primary transition-all hover:scale-110"
              >
                <FaGithub />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-2xl text-slate-600 dark:text-slate-400 hover:text-primary transition-all hover:scale-110"
              >
                <FaLinkedin />
              </a>
              <a
                href={personalInfo.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="text-2xl text-slate-600 dark:text-slate-400 hover:text-primary transition-all hover:scale-110"
              >
                <FaTwitter />
              </a>
              <a
                href={personalInfo.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="text-2xl text-slate-600 dark:text-slate-400 hover:text-primary transition-all hover:scale-110"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 mt-12 md:mt-0 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Glow Ring */}
            <div className="absolute inset-0 rounded-full bg-linear-to-r from-primary/40 to-purple-500/40 blur-3xl animate-pulse"></div>

            {/* Outer Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-white/20 dark:border-slate-700/40 backdrop-blur-xl"></div>

            {/* Image */}
            <img
              ref={imageRef}
              src="https://i.ibb.co.com/zVYYPsYv/68077536-v-4.jpg"
              alt="Profile"
              className="relative w-full h-full object-contain rounded-full border-4 border-white dark:border-slate-800 shadow-2xl bg-black/5"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
