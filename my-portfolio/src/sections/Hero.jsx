import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="relative flex flex-col diagonal-split overflow-hidden">
      {/* Background sectors */}
      <div className="split-left" />

      {/* Main Content Area */}
      <div className="flex-1 flex items-center pt-32 pb-24 relative z-10">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:pr-12"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-raleway font-bold text-[40px] text-brand-black mb-4"
            >
              Hi, I am
            </motion.p>

            <h1 className="font-raleway font-bold text-[60px] md:text-[80px] leading-tight mb-4 text-brand-black">
              Panga<br />
              Syamsundar Rao
            </h1>
            
            <p className="font-raleway font-extrabold text-[25px] text-brand-gray-text mb-12">
              Front-end Developer / Full Stack Java Specialist
            </p>

            <div className="flex items-center gap-6 mb-8 md:mb-16">
              <a href="#" className="square-icon group">
                <FaGithub size={24} className="text-brand-black group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="square-icon group">
                <FaLinkedin size={24} className="text-brand-black group-hover:scale-110 transition-transform" />
              </a>
              <a href="mailto:syamsundarpanga@gmail.com" className="square-icon group">
                <Mail size={24} className="text-brand-black group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </motion.div>

          <div className="relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative lg:mr-0 z-20"
            >
              <div className="relative w-80 h-96 lg:w-[600px] lg:h-[700px] flex items-end">
                <img 
                  src="/SyamIMG.png" 
                  alt="Panga Syamsundar Rao" 
                  className="w-full h-full object-cover filter contrast-110 grayscale brightness-110"
                />
              </div>
              
              <div className="absolute bottom-10 -left-10 text-[15px] font-roboto text-brand-black max-w-[140px] leading-tight text-justify bg-white/50 p-2 backdrop-blur-sm">
                "Building robust backends and elegant frontends."
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ITberries style bar - Now relative to follow flex content */}
      <div className="bg-[#1D1D1D] py-16 text-white overflow-hidden relative z-20">
        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-12">
          <div className="max-w-3xl">
            <h3 className="font-montserrat font-bold text-[30px] uppercase tracking-[0.2em] mb-6 border-l-4 border-white pl-6">
              Tech Excellence
            </h3>
            <p className="font-open-sans font-light text-[15px] leading-relaxed text-justify opacity-80">
              Specializing in enterprise Java development, Spring Boot microservices, 
              and high-performance React applications. Delivering scalable solutions 
              with modern engineering practices and pixel-perfect design aesthetics.
            </p>
          </div>
          
          <div className="flex items-center gap-4 group cursor-pointer shrink-0">
            <div className="w-[2px] h-8 bg-white" />
            <span className="font-montserrat font-semibold text-[15px] uppercase tracking-widest hover:text-brand-gray-light transition-colors">Read More</span>
            <div className="w-[2px] h-8 bg-white" />
          </div>
        </div>

        {/* IT Background Watermark */}
        <div className="absolute right-[-20px] bottom-[-40px] opacity-10 pointer-events-none select-none transform rotate-[23.89deg]">
          <span className="text-[280px] font-varela text-black font-normal tracking-[3.78px]">IT</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
