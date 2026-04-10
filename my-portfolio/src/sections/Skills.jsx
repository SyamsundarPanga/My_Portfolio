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
  const skillCategories = [
    {
      title: "Backend",
      icon: <Server className="text-primary-500" size={24} />,
      skills: [
        { name: "Java", icon: <FaJava className="text-[#007396]" /> },
        { name: "Spring Boot", icon: <SiSpringboot className="text-[#6DB33F]" /> },
        { name: "Microservices", icon: null },
        { name: "Hibernate", icon: <SiHibernate className="text-[#59666C]" /> },
        { name: "JPA", icon: null },
      ]
    },
    {
      title: "Frontend",
      icon: <Layout className="text-blue-500" size={24} />,
      skills: [
        { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      ]
    },
    {
      title: "Database",
      icon: <Database className="text-purple-500" size={24} />,
      skills: [
        { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      ]
    },
    {
      title: "Tools & DevOps",
      icon: <Settings className="text-pink-500" size={24} />,
      skills: [
        { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
        { name: "AWS", icon: <FaAws className="text-[#FF9900]" /> },
        { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
        { name: "Maven", icon: null },
        { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
      ]
    }
  ];

  return (
    <Section id="skills" title="Technical Skills" subtitle="My Toolbox">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {skillCategories.map((category, categoryIdx) => (
          <GlassCard key={categoryIdx} className="h-full" delay={categoryIdx * 0.1}>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-dark-accent rounded-xl">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, skillIdx) => (
                <div 
                  key={skillIdx}
                  className="group flex flex-col items-center justify-center p-3 rounded-2xl bg-dark-bg/50 border border-white/5 hover:border-primary-500/30 hover:bg-primary-500/5 transition-all w-[calc(50%-0.5rem)]"
                >
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                    {skill.icon || <div className="w-6 h-6 rounded bg-gray-700" />}
                  </div>
                  <span className="text-xs text-gray-400 group-hover:text-white transition-colors">{skill.name}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Interactive Badge Cloud (Mobile) / Accent Area */}
      <div className="mt-16 flex flex-wrap justify-center gap-4">
        {["RESTful APIs", "Cloud Architecture", "Unit Testing", "UI/UX Design", "Performance Optimization"].map((tag, i) => (
          <Badge key={i} className="px-4 py-2 text-sm">{tag}</Badge>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
