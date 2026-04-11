import React from 'react';
import Section from '../components/Section';
import GlassCard from '../components/GlassCard';
import { motion } from 'framer-motion';
import { User, Code2, Rocket, Heart } from 'lucide-react';

const About = () => {
  return (
    <Section 
      id="about" 
      title="About Me" 
      subtitle="The IT specialist with over a year of experience in enterprise Java development." 
      className="bg-gray-50"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-start mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/3"
          >
            <div className="w-full aspect-square bg-white border-2 border-black p-2">
              <div className="w-full h-full bg-black flex items-center justify-center p-8 text-white text-center">
                <p className="text-xl font-black uppercase tracking-widest">Code Passion Design</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-2/3"
          >
            <p className="text-gray-600 text-lg leading-relaxed font-bold mb-6 italic">
              "I specialize in building modular, high-performance backends and clean, responsive interfaces that solve real-world problems."
            </p>
            <p className="text-gray-500 text-base leading-relaxed mb-6">
              Currently working at <span className="text-black font-black">BluePal</span>, I focus on the Java ecosystem, Spring Boot, and modern React architectures. My goal is to create software that is not just functional, but also highly scalable and maintainable.
            </p>
          </motion.div>
        </div>

        {/* Diagonal Separator as seen in screenshot placeholders */}
        <div className="flex justify-center mb-20">
          <div className="w-40 h-[2px] bg-black opacity-10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.3em] mb-4 text-black border-l-4 border-black pl-4">Design</h4>
            <p className="text-gray-500 text-sm leading-relaxed">
              I believe in clean, functional aesthetics. While I focus on backend, I ensure my frontends are intuitive, responsive, and follow modern UI/UX principles.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.3em] mb-4 text-black border-l-4 border-black pl-4">Development</h4>
            <p className="text-gray-500 text-sm leading-relaxed">
              My core strength lies in Java & Spring Boot. I build RESTful services, manage databases (MySQL/PostgreSQL), and optimize application performance.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
