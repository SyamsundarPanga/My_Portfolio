import React from 'react';
import Section from '../components/Section';
import GlassCard from '../components/GlassCard';
import { motion } from 'framer-motion';
import { Code2, Layout, Settings } from 'lucide-react';

const About = () => {
  return (
    <Section id="about" title="About Me" className="bg-brand-gray-accent">
      <div className="max-w-3xl mx-auto mb-16 px-4">
        <p className="font-open-sans font-normal text-[15px] md:text-[17px] leading-relaxed text-brand-black text-center">
          Panga Syamsundar Rao is a seasoned IT specialist with a focus on enterprise-grade web solutions. 
          Designing and developing complex systems with a minimalist aesthetic and maximum performance.
        </p>
      </div>

      <div className="flex justify-center mb-16 md:mb-20 opacity-20">
        <div className="w-24 md:w-40 h-[10px] md:h-[12px] border-y-2 border-brand-black" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 max-w-6xl mx-auto">
        {/* SERVICE 1: DESIGN */}
        <div className="space-y-4 md:space-y-6">
          <div className="flex items-center gap-4">
            <div className="square-icon p-2 md:p-3 shrink-0">
              <Layout size={24} className="md:size-[30px] text-brand-black" />
            </div>
            <h4 className="font-montserrat font-bold text-[18px] md:text-[22px] tracking-widest text-brand-black uppercase">Design</h4>
          </div>
          <p className="font-open-sans font-light text-[14px] leading-relaxed text-justify text-brand-black opacity-80">
            I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job. I focus on clean, modern, and user-centric interfaces.
          </p>
        </div>

        {/* SERVICE 2: DEVELOPMENT */}
        <div className="space-y-4 md:space-y-6">
          <div className="flex items-center gap-4">
            <div className="square-icon p-2 md:p-3 shrink-0">
              <Code2 size={24} className="md:size-[30px] text-brand-black" />
            </div>
            <h4 className="font-montserrat font-bold text-[18px] md:text-[22px] tracking-widest text-brand-black uppercase">Development</h4>
          </div>
          <p className="font-open-sans font-light text-[14px] leading-relaxed text-justify text-brand-black opacity-80">
            Using modern technologies like React, Spring Boot, and robust databases, I build scalable applications that perform reliably under heavy load. Every line of code is optimized for maintainability.
          </p>
        </div>

        {/* SERVICE 3: MAINTENANCE */}
        <div className="space-y-4 md:space-y-6">
          <div className="flex items-center gap-4">
            <div className="square-icon p-2 md:p-3 shrink-0">
              <Settings size={24} className="md:size-[30px] text-brand-black" />
            </div>
            <h4 className="font-montserrat font-bold text-[18px] md:text-[22px] tracking-widest text-brand-black uppercase">Maintenance</h4>
          </div>
          <p className="font-open-sans font-light text-[14px] leading-relaxed text-justify text-brand-black opacity-80">
            Post-launch support is critical. I provide comprehensive maintenance, performance audits, and security updates to ensure your digital products remain sharp and effective long after the first commit.
          </p>
        </div>
      </div>
      
      <div className="flex justify-center mt-20 md:mt-32 opacity-10">
        <div className="w-24 md:w-40 h-[10px] md:h-[12px] border-y-2 border-brand-black" />
      </div>
    </Section>
  );
};

export default About;
