import { motion } from "framer-motion";
import { skills } from "../data/portfolioData";

const Skill = () => {
    return (
        <section id="skills" className="section-padding relative overflow-hidden">
            {/* Background Decor */}
            <div className="glow-mesh opacity-50"></div>
            <div className="ghost-text left-0 top-1/2 -translate-y-1/2 opacity-10">STACK</div>

            <div className="container mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20 text-center md:text-left"
                >
                    <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">Expertise</span>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter">
                        Tech <span className="text-gradient">Stack</span>
                    </h2>
                    <div className="w-16 h-1.5 bg-primary rounded-full md:mx-0 mx-auto"></div>
                </motion.div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {skills.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="bento-card group p-8 flex flex-col items-center justify-center relative hover:bg-white/5"
                                title={skill.name}
                            >
                                {/* Tooltip Background Glow */}
                                <div className="absolute inset-0 bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                <motion.div
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    className="relative z-10"
                                >
                                    <Icon className="text-5xl md:text-6xl text-slate-500 group-hover:text-primary transition-colors duration-300" />
                                </motion.div>

                                <span className="mt-4 text-[10px] font-black text-slate-500 group-hover:text-white uppercase tracking-widest transition-colors relative z-10">
                                    {skill.name}
                                </span>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="mt-24 flex justify-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="inline-flex items-center gap-4 px-8 py-4 bento-card bg-primary/5 border-primary/20 text-slate-400 font-bold"
                    >
                        <span className="material-symbols-outlined text-primary animate-spin-slow">settings</span>
                        <span className="text-sm tracking-wide uppercase">Engineered with modern standards</span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Skill;
