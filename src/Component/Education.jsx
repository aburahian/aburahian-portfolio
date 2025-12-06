
import { motion } from 'framer-motion';
import { education, experience } from '../data/portfolioData';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const Education = () => {
    return (
        <section id="experience" className="py-20 bg-white dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">Experience & Education</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Experience Column */}
                    <div>
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-8 flex items-center gap-3">
                            <FaBriefcase className="text-primary" /> Professional Experience
                        </h3>
                        <div className="space-y-8 border-l-2 border-slate-200 dark:border-slate-700 ml-3 pl-8 relative">
                            {experience.map((job, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="relative"
                                >
                                    <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-white dark:border-slate-900 bg-primary"></span>
                                    <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                        <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                                            {job.duration}
                                        </span>
                                        <h4 className="text-xl font-bold text-slate-800 dark:text-white mt-4">{job.role}</h4>
                                        <p className="text-slate-600 dark:text-slate-300 font-medium mb-2">{job.company}</p>
                                        <p className="text-slate-500 dark:text-slate-400 mb-4">{job.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {job.technologies.map((tech, idx) => (
                                                <span key={idx} className="text-xs font-medium text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-700 px-2 py-1 rounded border border-slate-200 dark:border-slate-600">
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
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-8 flex items-center gap-3">
                            <FaGraduationCap className="text-primary" /> Education
                        </h3>
                        <div className="space-y-8 border-l-2 border-slate-200 dark:border-slate-700 ml-3 pl-8 relative">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="relative"
                                >
                                    <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-white dark:border-slate-900 bg-primary"></span>
                                    <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                        <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                                            {edu.duration}
                                        </span>
                                        <h4 className="text-xl font-bold text-slate-800 dark:text-white mt-4">{edu.degree}</h4>
                                        <p className="text-slate-600 dark:text-slate-300 font-medium mb-2">{edu.institution}</p>
                                        <p className="text-slate-500 dark:text-slate-400">{edu.description}</p>
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