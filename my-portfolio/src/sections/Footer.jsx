import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div>
            <a href="#" className="text-2xl font-bold tracking-tighter mb-4 block">
              SYAM<span className="text-primary-500">.</span>
            </a>
            <p className="text-gray-500 max-w-xs text-sm">
              Building the future of the web with Java and modern frontend technologies.
            </p>
          </div>

          <div className="flex gap-12">
            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#about" className="hover:text-primary-400 transition-colors">About</a></li>
                <li><a href="#skills" className="hover:text-primary-400 transition-colors">Skills</a></li>
                <li><a href="#projects" className="hover:text-primary-400 transition-colors">Projects</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest mb-4">Social</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-primary-400 transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-primary-400 transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-primary-400 transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {currentYear} Panga Syamsundar Rao. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs flex items-center gap-1">
            Made with <Heart size={12} className="text-red-500 fill-red-500" /> in Visakhapatnam
          </p>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />
    </footer>
  );
};

export default Footer;
