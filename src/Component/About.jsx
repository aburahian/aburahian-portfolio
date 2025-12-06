import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { personalInfo } from "../data/portfolioData";
import { motion } from "framer-motion";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const statsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect on image
      gsap.to(imageRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        y: -50,
        ease: "none",
      });

      // Counter animation for stats
      statsRef.current.forEach((stat) => {
        if (stat) {
          gsap.from(stat, {
            scrollTrigger: {
              trigger: stat,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
            innerText: 0,
            duration: 2,
            snap: { innerText: 1 },
            ease: "power1.out",
            onUpdate: function () {
              stat.innerText = Math.ceil(this.targets()[0].innerText) + "+";
            },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 bg-white dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1"
          >
            <div className="overflow-hidden rounded-2xl h-120">
              <img
                ref={imageRef}
                src="https://i.ibb.co.com/KcK0dLMC/PixVfba.jpg"
                alt="Working"
                className="rounded-2xl shadow-2xl w-full h-full object-contain"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex-1"
          >
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4">
              A journey of curiosity and code.
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              {personalInfo.about}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <h4
                  ref={(el) => (statsRef.current[0] = el)}
                  className="font-bold text-xl text-primary mb-1"
                >
                  3
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  Years Experience
                </p>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <h4
                  ref={(el) => (statsRef.current[0] = el)}
                  className="font-bold text-xl text-primary mb-1"
                >
                  50
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  Projects Completed
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
