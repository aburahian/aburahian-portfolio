
import { motion } from 'framer-motion';
import { education, experience } from '../data/portfolioData';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const Education = () => {
    return (
        <section id="experience" className="relative section-padding overflow-hidden">
            {/* Background Decor */}
            <div className="ghost-text right-0 bottom-20 opacity-10 uppercase">Journey</div>

            <div className="container mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter">
                        My <span className="text-gradient">Journey</span>
                    </h2>
                    <div className="w-16 h-1.5 bg-primary rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Experience Column */}
                    <div>
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined">work</span>
                            </div>
                            <h3 className="text-2xl font-black text-white tracking-tight">Professional Path</h3>
                        </div>

                        <div className="space-y-8 relative">
                            {/* Timeline Line */}
                            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/5 to-transparent"></div>

                            {experience.map((job, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="relative pl-16 group"
                                >
                                    {/* Timeline Node */}
                                    <div className="absolute left-[18px] top-6 w-3 h-3 rounded-full bg-bg-dark border-2 border-primary group-hover:scale-150 group-hover:bg-primary transition-all duration-300 z-10 shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>

                                    <div className="bento-card p-6 md:p-8 hover:bg-white/5 transition-all">
                                        <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-4 block">
                                            {job.duration}
                                        </span>
                                        <h4 className="text-xl font-black text-white mb-1 group-hover:text-primary transition-colors tracking-tight">
                                            {job.role}
                                        </h4>
                                        <p className="text-slate-400 font-bold text-sm mb-4">
                                            {job.company}
                                        </p>
                                        <p className="text-slate-500 text-sm leading-relaxed mb-6">
                                            {job.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {job.technologies.map((tech, idx) => (
                                                <span key={idx} className="text-[9px] font-black text-slate-400 border border-white/5 bg-white/5 px-2.5 py-1 rounded-lg uppercase tracking-wider group-hover:border-primary/20 transition-colors">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Education Column */}
                    <div>
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                                <span className="material-symbols-outlined">school</span>
                            </div>
                            <h3 className="text-2xl font-black text-white tracking-tight">Academic Base</h3>
                        </div>

                        <div className="space-y-8 relative">
                            {/* Timeline Line */}
                            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-indigo-500/5 to-transparent"></div>

                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="relative pl-16 group"
                                >
                                    {/* Timeline Node */}
                                    <div className="absolute left-[18px] top-6 w-3 h-3 rounded-full bg-bg-dark border-2 border-indigo-500 group-hover:scale-150 group-hover:bg-indigo-500 transition-all duration-300 z-10 shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>

                                    <div className="bento-card p-6 md:p-8 hover:bg-white/5 transition-all">
                                        <span className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-4 block">
                                            {edu.duration}
                                        </span>
                                        <h4 className="text-xl font-black text-white mb-1 group-hover:text-indigo-400 transition-colors tracking-tight">
                                            {edu.degree}
                                        </h4>
                                        <p className="text-slate-400 font-bold text-sm mb-4">
                                            {edu.institution}
                                        </p>
                                        <p className="text-slate-500 text-sm leading-relaxed">
                                            {edu.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Education;