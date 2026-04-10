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
      location: "Remote / Hybrid",
      timeline: "Jan 2025 – Present",
      description: "Developing and maintaining enterprise-level Java applications with a focus on high performance and scalability.",
      achievements: [
        "Enhanced API performance by 30% through database query optimization and caching strategies.",
        "Implemented microservices architecture components for seamless data flow across platforms.",
        "Redesigned key frontend modules using React and Tailwind CSS, improving user engagement by 25%.",
        "Streamlined deployment pipelines using Docker and Maven, reducing deployment time by 40%."
      ],
      tags: ["Java", "Spring Boot", "React", "Docker", "MySQL"]
    }
  ];

  return (
    <Section id="experience" title="Work Experience" subtitle="My Career Journey">
      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, i) => (
          <div key={i} className="relative pl-8 md:pl-0">
            {/* Timeline Line */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary-600 to-transparent md:left-1/2 md:-ml-[1px]" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative mb-12"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-39px] md:left-1/2 md:-ml-3 top-0 w-6 h-6 rounded-full bg-dark-bg border-2 border-primary-500 shadow-[0_0_10px_rgba(139,92,246,0.5)] z-10" />
              
              <div className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16`}>
                <div className="md:w-1/2" />
                
                <GlassCard className="md:w-1/2 p-8" hover={false}>
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{exp.company}</h3>
                      <div className="flex items-center gap-2 text-primary-400 font-medium">
                        <Briefcase size={16} />
                        <span>{exp.role}</span>
                      </div>
                    </div>
                    <Badge className="bg-primary-500/20 text-primary-300 border-primary-500/30">
                      {exp.timeline}
                    </Badge>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{exp.timeline}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex gap-3 text-sm text-gray-400">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, idx) => (
                      <span key={idx} className="text-[10px] uppercase font-bold tracking-widest text-gray-500 border border-white/5 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
