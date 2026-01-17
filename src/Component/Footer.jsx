
import { personalInfo } from '../data/portfolioData';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaHeart } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="relative border-t border-white/5 pt-12 pb-28 md:pb-12 bg-bg-dark overflow-hidden">
            {/* Minimal Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50%] h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <p className="text-white font-black text-xl tracking-tighter">
                        {personalInfo.name.split(" ")[0]}<span className="text-primary">.</span>
                    </p>
                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">
                        &copy; {new Date().getFullYear()} All Rights Reserved
                    </p>
                </div>

                <div className="flex gap-6">
                    <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary/20 transition-all border border-white/5">
                        <FaGithub />
                    </a>
                    <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary/20 transition-all border border-white/5">
                        <FaLinkedin />
                    </a>
                    <a href={personalInfo.socials.facebook} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary/20 transition-all border border-white/5">
                        <FaFacebook />
                    </a>
                </div>

                <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">
                    Built by <span className="text-primary italic mx-1">Abu Rahian</span>
                </div>
            </div>
        </footer>
    );
};


export default Footer;
