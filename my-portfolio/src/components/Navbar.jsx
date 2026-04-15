import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-black h-[66px]' : 'bg-transparent py-6'}`}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        <motion.a 
          href="#"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center"
        >
          {/* logo 1 style */}
          <div className="w-[60px] h-[50px] flex items-center justify-center font-montserrat font-bold text-white tracking-widest text-2xl">
            S<span className="text-brand-gray-light">R</span>
          </div>
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-16">
          <a href="#about" className="font-montserrat font-bold text-[17px] text-white hover:text-brand-gray-light transition-colors">About me</a>
          <a href="#skills" className="font-montserrat font-bold text-[17px] text-white hover:text-brand-gray-light transition-colors">Skills</a>
          <a href="#projects" className="font-montserrat font-bold text-[17px] text-white hover:text-brand-gray-light transition-colors">Portfolio</a>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <a 
              href="#contact" 
              className="nav-btn"
            >
              CONTACT ME
            </a>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-b overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg text-gray-700 hover:text-black font-semibold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center gap-6 mt-4 pt-4 border-t border-black/5">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-black">
                  <FaGithub size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-black">
                  <FaLinkedin size={20} />
                </a>
                <a href="mailto:syamsundarpanga@gmail.com" className="text-gray-600 hover:text-black">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
