import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="relative flex flex-col diagonal-split overflow-hidden">
      {/* Background sectors */}
      <div className="split-left" />

      {/* Main Content Area */}
      <div className="flex-1 flex items-end relative z-10 w-full pt-0 pb-0">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Side: Gray Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:pr-12 text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-poppins font-medium text-[24px] text-brand-black mb-2 opacity-80"
            >
              Hi, I am
            </motion.p>

            <h1 className="font-poppins font-bold text-[55px] md:text-[75px] leading-[1.1] mb-4 text-brand-black tracking-tight">
              Panga<br />
              Syamsundar Rao
            </h1>

            <p className="font-inter font-semibold text-[18px] md:text-[22px] text-brand-gray-text mb-4 uppercase tracking-[0.1em]">
              Frontend Developer / Full Stack Java Specialist
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-8">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-brand-black text-white rounded-full hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-brand-black text-white rounded-full hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href="mailto:syamsundarpanga@gmail.com"
                className="w-12 h-12 flex items-center justify-center bg-brand-black text-white rounded-full hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <Mail size={22} />
              </a>
            </div>
          </motion.div>

          {/* Right Side: Dark Background + Profile Image */}
          <div className="relative flex justify-center lg:justify-end h-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative h-full flex items-end"
            >
              <div className="relative aspect-[3/4] h-[400px] md:h-[650px] lg:h-[800px]">
                <img
                  src="/SyamIMG.png"
                  alt="Panga Syamsundar Rao"
                  className="w-full h-full object-contain filter drop-shadow-2xl"
                />

                {/* Smooth blend overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/20 to-transparent pointer-events-none" />
              </div>

              <div className="absolute bottom-20 -left-10 text-[14px] font-inter text-white max-w-[140px] leading-tight text-justify bg-brand-black/40 p-3 backdrop-blur-md border border-white/10">
                "Building robust backends and elegant frontends."
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Restore Tech Excellence Section */}
      <div className="bg-brand-black py-4 text-white overflow-hidden relative z-20">
        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-12">
          <div className="max-w-3xl">
            <h3 className="font-poppins font-bold text-[28px] uppercase tracking-[0.2em] mb-6 border-l-4 border-white pl-6">
              Tech Excellence
            </h3>
            <p className="font-inter font-light text-[15px] leading-relaxed text-justify opacity-70">
              Specializing in enterprise Java development, Spring Boot microservices,
              and high-performance React applications. Delivering scalable solutions
              with modern engineering practices and pixel-perfect design aesthetics.
            </p>
          </div>

          <div className="flex items-center gap-4 group cursor-pointer shrink-0">
            <div className="w-[2px] h-8 bg-white" />
            <span className="font-poppins font-semibold text-[15px] uppercase tracking-widest hover:text-brand-gray-light transition-colors">Read More</span>
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
