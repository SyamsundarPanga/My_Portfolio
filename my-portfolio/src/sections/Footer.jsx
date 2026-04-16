import React from 'react';
import { ChevronsUp, Mail, ExternalLink } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Portfolio', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-brand-black text-white py-10 md:py-14 relative overflow-hidden">
      {/* Decorative vertical line */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[1px] h-8 md:h-12 bg-white/10 hidden md:block" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-start">
          
          {/* Column 1: Brand/Logo */}
          <div className="space-y-4 text-center md:text-left">
            <a href="#" className="inline-block">
              <img 
                src="/SyamLogo.png" 
                alt="Syam Logo" 
                className="h-10 md:h-12 w-auto object-contain brightness-0 invert" 
              />
            </a>
            <p className="font-inter font-light text-[14px] leading-relaxed text-gray-400 max-w-xs mx-auto md:mx-0">
              A professional Full Stack Java Developer dedicated to building scalable solutions and premium user experiences.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col items-center md:items-center space-y-4">
            <h3 className="font-montserrat font-bold text-[13px] uppercase tracking-[0.3em] text-white/40">
              Quick Links
            </h3>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 max-w-xs">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="font-montserrat font-bold text-[13px] uppercase tracking-widest hover:text-brand-gray-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Social/Contact */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <h3 className="font-montserrat font-bold text-[13px] uppercase tracking-[0.3em] text-white/40">
              Connect
            </h3>
            <div className="flex gap-4">
              <a 
                href="https://github.com/SyamsundarPanga" 
                target="_blank" 
                rel="noreferrer" 
                className="w-12 h-12 flex items-center justify-center border-2 border-white/10 hover:border-white hover:bg-white hover:text-brand-black transition-all duration-300"
              >
                <FaGithub size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/panga-syamsundar-rao-39b192226/" 
                target="_blank" 
                rel="noreferrer" 
                className="w-12 h-12 flex items-center justify-center border-2 border-white/10 hover:border-white hover:bg-white hover:text-brand-black transition-all duration-300"
              >
                <FaLinkedin size={20} />
              </a>
              <a 
                href="mailto:syampanga2003@gmail.com" 
                className="w-12 h-12 flex items-center justify-center border-2 border-white/10 hover:border-white hover:bg-white hover:text-brand-black transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
            <a 
              href="mailto:syampanga2003@gmail.com" 
              className="group flex items-center gap-2 font-inter text-[14px] text-gray-400 hover:text-white transition-colors"
            >
              syampanga2003@gmail.com
              <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>

        {/* Bottom Section: Copyright & Top Anchor */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-inter text-[13px] text-gray-500 tracking-wide text-center md:text-left">
            &copy; {currentYear} PANGA SYAMSUNDAR RAO. <br className="md:hidden" /> ALL RIGHTS RESERVED.
          </p>

          <button 
            onClick={scrollToTop}
            className="flex items-center gap-4 group hover:opacity-70 transition-opacity"
          >
            <span className="font-montserrat font-bold text-[12px] uppercase tracking-[0.3em]">
              Return to Top
            </span>
            <div className="w-10 h-10 flex items-center justify-center border-2 border-white/10 rounded-full group-hover:bg-white group-hover:text-brand-black transition-all duration-500">
              <ChevronsUp size={18} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
