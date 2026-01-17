import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data/portfolioData';
import Background from './Background';
import Navbar from './Navbar';
import Footer from './Footer';

const AllProjects = () => {
    return (
        <div className="relative min-h-screen selection:bg-primary/30 selection:text-primary overflow-x-hidden">
            <Background />
            <div className="flex flex-col relative z-10">
                <Navbar />

                <main className="grow section-padding">
                    <div className="container mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mb-20"
                        >
                            <Link to="/" className="text-primary font-black text-[10px] uppercase tracking-[0.3em] flex items-center gap-2 mb-8 hover:gap-4 transition-all group w-fit">
                                <span className="material-symbols-outlined text-[16px]">west</span>
                                Return Home
                            </Link>

                            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
                                Project <span className="text-gradient">Archive</span>
                            </h1>
                            <div className="w-20 h-2 bg-primary rounded-full mb-8"></div>
                            <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
                                A comprehensive index of my digital explorations, experimental builds, and industry innovations.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Link to={`/project/${project.id}`} className="group block h-full">
                                        <div className="bento-card overflow-hidden h-full flex flex-col group-hover:bg-white/5 transition-all duration-500">
                                            <div className="relative h-56 overflow-hidden">
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent"></div>
                                            </div>

                                            <div className="p-8 flex-1 flex flex-col">
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    {project.techStack.map((tech, idx) => (
                                                        <span key={idx} className="text-[9px] font-black text-primary uppercase tracking-widest bg-primary/10 px-2.5 py-1 rounded">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>

                                                <h3 className="text-2xl font-black text-white mb-3 tracking-tight group-hover:text-primary transition-colors">
                                                    {project.title}
                                                </h3>

                                                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                                                    {project.description}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        </div>
    );
};

export default AllProjects;
