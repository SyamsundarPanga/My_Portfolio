import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { ChevronRight, MousePointer2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center pt-20 overflow-hidden">
      {/* Background Animated Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-900/20 blur-[120px] rounded-full animate-pulse-slow" />
        <div className="absolute bottom-[10%] right-[0%] w-[35%] h-[35%] bg-blue-900/20 blur-[120px] rounded-full animate-float" />
        <div className="absolute top-[20%] right-[10%] w-[20%] h-[20%] bg-purple-900/10 blur-[100px] rounded-full" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-dark-bg/40 -z-10" />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="w-12 h-[1px] bg-primary-500" />
            <span className="text-primary-400 font-medium tracking-wider uppercase text-sm">Open for Collaboration</span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight mb-6">
            Panga <span className="text-gradient">Syam</span><br />
            Sundar Rao
          </h1>

          <p className="text-xl text-gray-400 max-w-lg mb-10 leading-relaxed">
            I'm a <span className="text-white font-medium">Full Stack Java Developer</span> specializing in building high-performance, scalable web applications with modern architectures.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Button href="#projects" className="min-w-[160px]">
              View My Work <ChevronRight size={18} />
            </Button>
            <Button href="#contact" variant="secondary" className="min-w-[160px]">
              Let's Talk
            </Button>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-sm text-gray-500 font-medium">Connect with me:</span>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 glass rounded-lg text-gray-400 hover:text-primary-400 hover:scale-110 transition-all">
                <FaGithub size={20} />
              </a>
              <a href="#" className="p-2 glass rounded-lg text-gray-400 hover:text-primary-400 hover:scale-110 transition-all">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative hidden lg:block"
        >
          {/* Main Hero Image Container - Circular and Smaller */}
          <div className="relative z-10 w-72 h-72 xl:w-80 xl:h-80 mx-auto rounded-full overflow-hidden shadow-[0_0_50px_rgba(139,92,246,0.3)] group border-2 border-white/10">
            <img 
              src="/Syam.webp" 
              alt="Panga Syamsundar Rao" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/40 via-transparent to-transparent opacity-60" />
          </div>

          {/* Decorative Circles */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full" />
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-white/5 rounded-full" />
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[30px] h-[50px] rounded-full border-2 border-white/10 flex justify-center p-2">
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary-500"
          />
        </div>
        <span className="text-[10px] uppercase tracking-widest text-gray-500">Scroll Down</span>
      </motion.div>
    </section>
  );
};

export default Hero;
