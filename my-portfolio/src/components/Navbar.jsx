import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

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
    { name: 'Education', href: '#education' },
    { name: 'Portfolio', href: '#projects' },
    { name: 'Contact Me', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-black h-[66px]' : 'bg-transparent py-2'}`}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        <motion.a
          href="#"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center"
        >
          <img
            src="/SyamLogo.png"
            alt="Syam Logo"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-2 lg:gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveLink(link.name)}
              className={`font-montserrat font-bold text-[14px] lg:text-[15px] px-4 py-2 rounded-full transition-all duration-300 ${activeLink === link.name
                ? 'bg-brand-gray-accent text-brand-black shadow-lg shadow-white/10'
                : 'text-white hover:text-brand-gray-accent hover:bg-white/5'
                }`}
            >
              {link.name}
            </a>
          ))}
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
            className="md:hidden bg-brand-black/95 backdrop-blur-md border-b border-white/10 overflow-hidden text-white"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-lg font-semibold px-6 py-2 rounded-full transition-all duration-300 ${activeLink === link.name
                    ? 'bg-brand-gray-accent text-brand-black'
                    : 'text-white hover:bg-white/10'
                    }`}
                  onClick={() => {
                    setActiveLink(link.name);
                    setMobileMenuOpen(false);
                  }}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center gap-6 mt-4 pt-4 border-t border-white/10">
                <a href="https://github.com/SyamsundarPanga" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <FaGithub size={20} />
                </a>
                <a href="https://www.linkedin.com/in/panga-syamsundar-rao-39b192226/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <FaLinkedin size={20} />
                </a>
                <a href="mailto:syampanga2003@gmail.com" className="text-gray-400 hover:text-white transition-colors">
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
