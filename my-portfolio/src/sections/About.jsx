import React from 'react';
import Section from '../components/Section';
import GlassCard from '../components/GlassCard';
import { motion } from 'framer-motion';
import { Code2, Layout, Settings } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-20">
        <div className="boxed-header mb-12">
          ABOUT ME
        </div>
        
        <div className="max-w-3xl mx-auto mb-16">
          <p className="font-open-sans font-normal text-[15px] leading-relaxed text-brand-black text-center">
            Panga Syamsundar Rao is a seasoned IT specialist with a focus on enterprise-grade web solutions. 
            Designing and developing complex systems with a minimalist aesthetic and maximum performance.
          </p>
        </div>

        {/* separatorBlack 1 style */}
        <div className="flex justify-center mb-20 opacity-20">
          <div className="w-40 h-[12px] border-y-2 border-brand-black" />
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl mx-auto">
          {/* SERVICE 1: DESIGN */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="square-icon p-3">
                <Layout size={30} className="text-brand-black" />
              </div>
              <h4 className="font-montserrat font-bold text-[22px] tracking-widest text-brand-black">DESIGN</h4>
            </div>
            <p className="font-open-sans font-light text-[14px] leading-relaxed text-justify text-brand-black">
              I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job. I focus on clean, modern, and user-centric interfaces.
            </p>
          </div>

          {/* SERVICE 2: DEVELOPMENT */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="square-icon p-3">
                <Code2 size={30} className="text-brand-black" />
              </div>
              <h4 className="font-montserrat font-bold text-[22px] tracking-widest text-brand-black">DEVELOPMENT</h4>
            </div>
            <p className="font-open-sans font-light text-[14px] leading-relaxed text-justify text-brand-black">
              Using modern technologies like React, Spring Boot, and robust databases, I build scalable applications that perform reliably under heavy load. Every line of code is optimized for maintainability.
            </p>
          </div>

          {/* SERVICE 3: MAINTENANCE */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="square-icon p-3">
                <Settings size={30} className="text-brand-black" />
              </div>
              <h4 className="font-montserrat font-bold text-[22px] tracking-widest text-brand-black">MAINTENANCE</h4>
            </div>
            <p className="font-open-sans font-light text-[14px] leading-relaxed text-justify text-brand-black">
              Post-launch support is critical. I provide comprehensive maintenance, performance audits, and security updates to ensure your digital products remain sharp and effective long after the first commit.
            </p>
          </div>
        </div>
      </div>
      
      {/* separatorBlack 2 style bottom */}
      <div className="container mx-auto px-6 flex justify-center mt-32 opacity-10">
        <div className="w-40 h-[12px] border-y-2 border-brand-black" />
      </div>
    </section>
  );
};

export default About;
