import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { personalInfo } from '../data/portfolioData';
import { FaEnvelope, FaPhone, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSend = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            Swal.fire({
                icon: 'warning',
                title: 'Missing Fields',
                text: 'Please fill in all fields before sending.',
                background: '#0f172a',
                color: '#fff',
                confirmButtonColor: '#06b6d4'
            });
            return;
        }

        setLoading(true);
        const time = new Date().toLocaleString("en-US", {
            timeZone: "Asia/Dhaka"
        });
        emailjs.send(
            'service_49rxmx6',
            'template_rdk0l3d',
            {
                from_name: formData.name,
                to_name: "Abu Rahian",
                name: formData.name,
                from_email: formData.email,
                to_email: "aburaihan363@gmail.com",
                time,
                message: formData.message,
            },
            'o9VBDWFPUgcVxQj0P'
        )
            .then(() => {
                setLoading(false);
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent!',
                    text: 'Thank you. I will get back to you as soon as possible.',
                    background: '#0f172a',
                    color: '#fff',
                    confirmButtonColor: '#06b6d4',
                    timer: 3000,
                    timerProgressBar: true
                });
                setFormData({
                    name: "",
                    email: "",
                    message: "",
                });
            }, (error) => {
                setLoading(false);
                console.error(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Transmission Failed',
                    text: 'Something went wrong. Please try again.',
                    background: '#0f172a',
                    color: '#fff',
                    confirmButtonColor: '#ef4444'
                });
            });
    };

    return (
        <section id="contact" className="relative section-padding overflow-hidden">
            {/* Background Decor */}
            <div className="glow-mesh opacity-30"></div>
            <div className="ghost-text right-20 top-1/2 -translate-y-1/2 opacity-10 uppercase">Hello</div>

            <div className="container mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter">
                        Get In <span className="text-gradient">Touch</span>
                    </h2>
                    <div className="w-16 h-1.5 bg-primary rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Contact Info Side */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bento-card p-10 md:p-12 group overflow-hidden relative"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                <span className="material-symbols-outlined text-9xl">chat</span>
                            </div>

                            <h3 className="text-3xl font-black text-white mb-6 tracking-tight">Ready to <br /><span className="text-primary italic">Innovate?</span></h3>
                            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-sm">
                                I'm currently available for freelance work and full-time opportunities. Let's build something amazing together.
                            </p>

                            <div className="space-y-6">
                                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-6 group/item p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-white transition-all transform group-hover/item:rotate-12">
                                        <FaEnvelope className="text-2xl" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Send a Mail</p>
                                        <p className="text-white font-black tracking-tight">{personalInfo.email}</p>
                                    </div>
                                </a>

                                <a href={`https://wa.me/${personalInfo.whatsapp.replace(/[^0-9]/g, '')}`} className="flex items-center gap-6 group/item p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                                    <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500 group-hover/item:bg-green-500 group-hover/item:text-white transition-all transform group-hover/item:-rotate-12">
                                        <FaWhatsapp className="text-2xl" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Quick Chat</p>
                                        <p className="text-white font-black tracking-tight">{personalInfo.whatsapp}</p>
                                    </div>
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:col-span-7"
                    >
                        <form ref={formRef} onSubmit={handleSend} className="bento-card p-10 md:p-12 flex flex-col gap-8 group">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Full Name"
                                        required
                                        className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all font-medium"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Email Address"
                                        required
                                        className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all font-medium"
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    placeholder="Tell me about your message..."
                                    required
                                    className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-5 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all font-medium resize-none"
                                ></textarea>
                            </div>

                            <button type="submit" disabled={loading} className="w-full py-5 rounded-2xl bg-primary text-white font-black text-xs uppercase tracking-[0.3em] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl shadow-primary/20 flex items-center justify-center gap-4 group/btn disabled:opacity-70 disabled:cursor-not-allowed">
                                {loading ? "Sending..." : "Send Message"}
                                {!loading && <span className="material-symbols-outlined group-hover/btn:translate-x-2 group-hover/btn:-translate-y-2 transition-transform duration-500">send</span>}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
