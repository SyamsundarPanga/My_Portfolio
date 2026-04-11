import React from 'react';
import Section from '../components/Section';
import GlassCard from '../components/GlassCard';
import Badge from '../components/Badge';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "BluePal",
      role: "Full Stack Developer",
      timeline: "Jan 2025 – Present",
      description: "Architecting enterprise Java backends and modern React interfaces with a focus on high-performance systems and modularity.",
      achievements: [
        "API Performance Optimization (30%+ improvement)",
        "Microservices Architecture Implementation",
        "React & Tailwind CSS Frontend Modernization",
        "Docker-based Deployment Orchestration"
      ]
    }
  ];

  return (
    <Section id="experience" title="Experience" subtitle="My professional timeline as an IT specialist.">
      <div className="max-w-4xl mx-auto space-y-24">
        {experiences.map((exp, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start relative"
          >
            {/* Year indication as seen in vertical layouts */}
            <div className="md:col-span-3">
              <span className="text-sm font-black uppercase tracking-[0.4em] text-gray-400">{exp.timeline}</span>
            </div>

            <div className="md:col-span-9 border-l-2 border-black pl-8 pb-8">
              <h3 className="text-2xl font-black uppercase tracking-widest text-black mb-1">{exp.company}</h3>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-gray-500 mb-6">{exp.role}</p>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-8 font-medium">
                {exp.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {exp.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-black flex-shrink-0" />
                    <span className="text-xs font-black uppercase tracking-widest text-gray-500">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
