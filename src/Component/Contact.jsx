import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { personalInfo } from '../data/portfolioData';
import { FaEnvelope, FaPhone, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const sectionRef = useRef(null);
    const formFieldsRef = useRef([]);
    const contactItemsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Staggered contact items animation
            gsap.from(contactItemsRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                    toggleActions: 'play none none reverse'
                },
                x: -50,
                opacity: 0,
                duration: 0.6,
                stagger: 0.15,
                ease: 'power2.out'
            });

            // Form fields animation
            gsap.from(formFieldsRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                    toggleActions: 'play none none reverse'
                },
                y: 30,
                opacity: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: 'power2.out'
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="contact" className="py-20 bg-white dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Contact Information</h3>
                        <p className="text-slate-600 dark:text-slate-300 mb-8">
                            Feel free to reach out to me for any questions or opportunities. I&apos;ll get back to you as soon as possible!
                        </p>
                        <div className="space-y-6">
                            <div ref={(el) => (contactItemsRef.current[0] = el)} className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xl">
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
                                    <a href={`mailto:${personalInfo.email}`} className="text-lg font-medium text-slate-800 dark:text-white hover:text-primary transition-colors">
                                        {personalInfo.email}
                                    </a>
                                </div>
                            </div>
                            <div ref={(el) => (contactItemsRef.current[1] = el)} className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xl">
                                    <FaPhone />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Phone</p>
                                    <a href={`tel:${personalInfo.phone}`} className="text-lg font-medium text-slate-800 dark:text-white hover:text-primary transition-colors">
                                        {personalInfo.phone}
                                    </a>
                                </div>
                            </div>
                            <div ref={(el) => (contactItemsRef.current[2] = el)} className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xl">
                                    <FaWhatsapp />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">WhatsApp</p>
                                    <a href={`https://wa.me/${personalInfo.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" className="text-lg font-medium text-slate-800 dark:text-white hover:text-primary transition-colors">
                                        {personalInfo.whatsapp}
                                    </a>
                                </div>
                            </div>
                            <div ref={(el) => (contactItemsRef.current[3] = el)} className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xl">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Location</p>
                                    <p className="text-lg font-medium text-slate-800 dark:text-white">
                                        Satkhira,Khalna,Bangladesh
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl shadow-lg">
                        <form className="space-y-6">
                            <div ref={(el) => (formFieldsRef.current[0] = el)}>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div ref={(el) => (formFieldsRef.current[1] = el)}>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div ref={(el) => (formFieldsRef.current[2] = el)}>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>
                            <button
                                ref={(el) => (formFieldsRef.current[3] = el)}
                                type="submit"
                                className="w-full py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
