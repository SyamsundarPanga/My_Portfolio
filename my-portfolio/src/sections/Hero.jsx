import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  const roles = [
    "Full Stack Java Specialist",
    "Frontend Developer",
    "Backend Developer"
  ];

  const [currentRole, setCurrentRole] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [roles.length]);

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

            <h1 className="font-poppins font-bold text-[40px] sm:text-[55px] md:text-[75px] leading-[1.1] mb-4 text-brand-black tracking-tight">
              Panga<br />
              Syamsundar Rao
            </h1>

            <div className="h-[30px] sm:h-[40px] md:h-[50px] overflow-hidden mb-4">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentRole}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="font-inter font-semibold text-[14px] sm:text-[18px] md:text-[22px] text-brand-gray-text uppercase tracking-[0.1em]"
                >
                  {roles[currentRole]}
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 md:gap-8">
              <a
                href="https://github.com/SyamsundarPanga"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-brand-black text-white rounded-full hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/panga-syamsundar-rao-39b192226/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-brand-black text-white rounded-full hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href="mailto:syampanga2003@gmail.com"
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
              <div className="relative aspect-[3/4] h-[300px] sm:h-[450px] md:h-[650px] lg:h-[800px]">
                <img
                  src="/SyamIMG.png"
                  alt="Panga Syamsundar Rao"
                  className="w-full h-full object-contain"
                />
              </div>

            </motion.div>
          </div>

        </div>
      </div>

      {/* Restore Tech Excellence Section */}
      <div className="bg-brand-black py-4 md:py-8 text-white overflow-hidden relative z-20 transition-all duration-500">
        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-8 md:gap-12">
          <div className="max-w-3xl">
            <h3 className="font-poppins font-bold text-[20px] md:text-[28px] uppercase tracking-[0.2em] mb-4 md:mb-6 border-l-4 border-white pl-4 md:pl-6">
              Tech Excellence
            </h3>
            <div className="font-inter font-light text-[12px] md:text-[15px] leading-relaxed text-justify opacity-70">
              <p>
                Full Stack Java Developer with 1+ years of experience building and delivering scalable web applications using Spring Boot, microservices, Hibernate/JPA, and React. I have hands-on experience in developing secure REST APIs using Spring Security and JWT, improving API performance, and creating reusable UI components for better user experience.
              </p>
              
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4">
                      I am comfortable working with MySQL, PostgreSQL, and MongoDB, and have experience using tools like Docker, Maven, and Postman in day-to-day development. I also have basic exposure to AWS and CI/CD pipelines and have been involved in deploying applications and working with teams to ensure smooth and reliable production releases.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div 
            className="flex items-center gap-4 group cursor-pointer shrink-0 mt-4 md:mt-12"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <div className="w-[2px] h-8 bg-white transition-all duration-300 group-hover:h-12" />
            <span className="font-poppins font-semibold text-[15px] uppercase tracking-widest hover:text-brand-gray-light transition-colors">
              {isExpanded ? 'Read Less' : 'Read More'}
            </span>
            <div className="w-[2px] h-8 bg-white transition-all duration-300 group-hover:h-12" />
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
