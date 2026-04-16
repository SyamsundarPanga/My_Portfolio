import { ChevronsRight, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-20 bg-brand-gray-dark text-white relative">
      <div className="container mx-auto px-6 flex flex-col items-center gap-12">
        {/* BACK TO TOP */}
        <button 
          onClick={scrollToTop}
          className="flex flex-col items-center gap-4 group"
        >
          <div className="w-8 h-8 flex items-center justify-center transform -rotate-90">
             <ChevronsRight size={20} className="text-white group-hover:-translate-y-1 transition-transform" />
          </div>
          <span className="font-montserrat font-bold text-[15px] tracking-[0.18em] uppercase">BACK TO TOP</span>
        </button>

        {/* SOCIAL ICONS */}
        <div className="flex gap-8">
          <a href="https://github.com/SyamsundarPanga" target="_blank" rel="noreferrer" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
            <FaGithub size={18} />
          </a>
          <a href="https://www.linkedin.com/in/panga-syamsundar-rao-39b192226/" target="_blank" rel="noreferrer" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
            <FaLinkedin size={18} />
          </a>
          <a href="mailto:syampanga2003@gmail.com" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
            <Mail size={18} />
          </a>
        </div>

        {/* COPYRIGHT */}
        <div className="text-center pt-8 border-t border-white/5 w-full max-w-sm">
          <p className="font-nunito font-bold text-[18px] opacity-80">
            © {currentYear} Panga Syamsundar Rao. <br />
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
