
import { personalInfo } from '../data/portfolioData';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaHeart } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-slate-600 dark:text-slate-400 text-sm text-center md:text-left">
                    &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
                </p>
                <div className="flex items-center gap-1 text-sm text-slate-600 dark:text-slate-400">
                    Made with <FaHeart className="text-red-500" /> by {personalInfo.name}
                </div>
                <div className="flex gap-4">
                    <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary transition-colors">
                        <FaGithub />
                    </a>
                    <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary transition-colors">
                        <FaLinkedin />
                    </a>
                    <a href={personalInfo.socials.twitter} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary transition-colors">
                        <FaTwitter />
                    </a>
                    <a href={personalInfo.socials.facebook} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary transition-colors">
                        <FaFacebook />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
