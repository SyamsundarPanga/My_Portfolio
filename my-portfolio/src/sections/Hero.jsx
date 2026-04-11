import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { ChevronRight, MousePointer2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center pt-20 diagonal-split">
      {/* Background sectors */}
      <div className="split-left" />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:pr-12 pt-12"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-black font-extrabold tracking-widest uppercase text-sm mb-6"
          >
            Hi, I am
          </motion.p>

          <h1 className="text-7xl md:text-9xl font-black tracking-tight leading-[0.9] mb-6 text-black uppercase">
            Panga<br />
            Syamsundar
          </h1>
          
          <p className="text-sm text-gray-400 font-extrabold uppercase tracking-[0.2em] mb-12">
            Full Stack Developer / Java Specialist
          </p>

          <div className="flex items-center gap-4 mb-16">
            <a href="#" className="square-icon p-2">
              <FaGithub size={18} />
            </a>
            <a href="#" className="square-icon p-2">
              <FaLinkedin size={18} />
            </a>
            <a href="#" className="square-icon p-2">
               <MousePointer2 size={18} />
            </a>
          </div>
        </motion.div>

        <div className="relative flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative lg:-mr-12 lg:-mt-12 z-20"
          >
            {/* Main Hero Image - Placed to overlap split */}
            <div className="relative w-80 h-80 lg:w-[600px] lg:h-[700px] flex items-end">
              <img 
                src="/SyamIMG.png" 
                alt="Panga Syamsundar Rao" 
                className="w-full h-full object-cover filter contrast-110 brightness-105"
              />
            </div>
            
            {/* Small credit text as seen in screenshot */}
            <div className="absolute bottom-10 right-0 text-[10px] text-white/40 max-w-[120px] text-right leading-tight italic">
              "Building robust backends and elegant frontends."
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom informational bar (IT BERRIES style) */}
      <div className="absolute bottom-0 left-0 right-0 bg-black py-16 text-white overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h3 className="text-xl font-black uppercase tracking-[0.3em] mb-6 border-l-4 border-white pl-4">Tech Stack Focus</h3>
            <p className="text-gray-400 text-xs leading-relaxed font-bold uppercase tracking-widest">
              Specializing in enterprise Java development, Spring Boot microservices, 
              and high-performance React applications. Delivering scalable solutions 
              with modern engineering practices.
            </p>
          </div>
          
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-px h-12 bg-white/20" />
            <span className="text-xs font-black uppercase tracking-[0.3em] hover:text-gray-300 transition-colors">Read More</span>
            <div className="w-px h-12 bg-white/20" />
          </div>
        </div>

        {/* Large "IT" Background Watermark */}
        <div className="absolute right-[-20px] bottom-[-40px] opacity-10 pointer-events-none select-none">
          <span className="text-[250px] font-black tracking-tighter text-white">IT</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
