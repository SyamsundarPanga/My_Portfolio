import React from 'react';
import Section from '../components/Section';
import GlassCard from '../components/GlassCard';
import Badge from '../components/Badge';
import { motion } from 'framer-motion';
import { 
  SiSpringboot, SiReact, SiJavascript, 
  SiTypescript, SiTailwindcss, SiMysql, SiPostgresql, 
  SiMongodb, SiDocker, SiGit,
  SiPostman, SiHibernate
} from 'react-icons/si';
import { FaJava, FaAws } from 'react-icons/fa';
import { Database, Layout, Server, Settings } from 'lucide-react';

const Skills = () => {
  const sections = [
    {
      title: "Using now:",
      skills: [
        { name: "Java", icon: <FaJava className="text-[#007396]" /> },
        { name: "Spring Boot", icon: <SiSpringboot className="text-[#6DB33F]" /> },
        { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
        { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
        { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
      ]
    },
    {
      title: "Learning:",
      skills: [
        { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
        { name: "AWS", icon: <FaAws className="text-[#FF9900]" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
      ]
    },
    {
      title: "Other skills:",
      skills: [
        { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
        { name: "Hibernate", icon: <SiHibernate className="text-[#59666C]" /> },
        { name: "Maven", icon: null },
      ]
    }
  ];

  return (
    <Section id="skills" title="Skills" subtitle="My technical expertise categorized by proficiency and current focus.">
      <div className="max-w-5xl mx-auto space-y-20">
        {sections.map((section, idx) => (
          <div key={idx} className="space-y-10">
            <h4 className="text-sm font-black uppercase tracking-[0.4em] text-black text-center md:text-left">{section.title}</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-x-12 gap-y-16">
              {section.skills.map((skill, sIdx) => (
                <motion.div 
                  key={sIdx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: sIdx * 0.05 }}
                  className="flex flex-col items-center group cursor-default"
                >
                  <div className="text-5xl md:text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon || <div className="w-12 h-12 rounded bg-gray-100" />}
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
