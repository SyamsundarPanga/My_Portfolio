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
          Panga Syamsundar Rao is a dedicated Full Stack Java Developer with 1+ years of professional experience, 
          currently contributing to innovative solutions at BluePal in Hyderabad. With a B.Tech in CSE from CT University, 
          I specialize in building high-performance web applications that bridge the gap between complex backend logic 
          and elegant frontend experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 max-w-6xl mx-auto">
        {/* SERVICE 1: BACKEND */}
        <div className="space-y-4 md:space-y-6">
          <div className="flex items-center gap-4">
            <div className="square-icon p-2 md:p-3 shrink-0">
              <Code2 size={24} className="md:size-[30px] text-brand-black" />
            </div>
            <h4 className="font-montserrat font-bold text-[18px] md:text-[22px] tracking-widest text-brand-black uppercase">Backend Mastery</h4>
          </div>
          <p className="font-open-sans font-light text-[14px] leading-relaxed text-justify text-brand-black opacity-80">
            Expertise in Java, Spring Boot, and Microservices architecture. I build secure REST APIs using Spring Security/JWT and optimize database interactions with Hibernate and JPA across MySQL, PostgreSQL, and MongoDB.
          </p>
        </div>

        {/* SERVICE 2: FRONTEND */}
        <div className="space-y-4 md:space-y-6">
          <div className="flex items-center gap-4">
            <div className="square-icon p-2 md:p-3 shrink-0">
              <Layout size={24} className="md:size-[30px] text-brand-black" />
            </div>
            <h4 className="font-montserrat font-bold text-[18px] md:text-[22px] tracking-widest text-brand-black uppercase">Frontend Excellence</h4>
          </div>
          <p className="font-open-sans font-light text-[14px] leading-relaxed text-justify text-brand-black opacity-80">
            Specializing in React.js and modern styling with Tailwind CSS. I create reusable UI components and responsive interfaces that ensure a seamless user experience across all devices and browsers.
          </p>
        </div>

        {/* SERVICE 3: DEVOPS */}
        <div className="space-y-4 md:space-y-6">
          <div className="flex items-center gap-4">
            <div className="square-icon p-2 md:p-3 shrink-0">
              <Settings size={24} className="md:size-[30px] text-brand-black" />
            </div>
            <h4 className="font-montserrat font-bold text-[18px] md:text-[22px] tracking-widest text-brand-black uppercase">DevOps & Deployment</h4>
          </div>
          <p className="font-open-sans font-light text-[14px] leading-relaxed text-justify text-brand-black opacity-80">
            Proficient in modern engineering workflows using Docker, Maven, and Postman. I am experienced in CI/CD pipelines, AWS cloud basics, and collaborative team environments to ensure reliable production releases.
          </p>
        </div>
      </div>
      
    </Section>
  );
};

export default About;
