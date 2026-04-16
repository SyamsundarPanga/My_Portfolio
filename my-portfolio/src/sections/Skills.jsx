import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';
import { 
  SiSpringboot, SiReact, SiJavascript, 
  SiTypescript, SiTailwindcss, SiMysql, SiPostgresql, 
  SiMongodb, SiDocker, SiGit, SiPostman, SiHibernate, 
  SiBootstrap, SiSpringsecurity, SiApachemaven, SiGithub
} from 'react-icons/si';
import { FaJava, FaAws } from 'react-icons/fa';
import { Network, Database, Layout, Settings, Cpu } from 'lucide-react';

const SkillTile = ({ name, icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="flex flex-col items-center gap-4 group"
    >
      <div className="square-icon text-brand-black/80 grayscale group-hover:grayscale-0 transition-all duration-300">
        {React.cloneElement(icon, { size: 30 })}
      </div>
      <span className="font-montserrat font-bold text-[11px] md:text-[13px] tracking-[0.15em] text-brand-black/60 group-hover:text-brand-black transition-colors uppercase text-center">
        {name}
      </span>
    </motion.div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Core Stack",
      skills: [
        { name: "Java", icon: <FaJava /> },
        { name: "Spring Boot", icon: <SiSpringboot /> },
        { name: "React", icon: <SiReact /> },
        { name: "Microservices", icon: <Network /> },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "REST APIs", icon: <Settings /> },
        { name: "Spring Security", icon: <SiSpringsecurity /> },
        { name: "Hibernate/JPA", icon: <SiHibernate /> },
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Bootstrap", icon: <SiBootstrap /> },
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
      ]
    },
    {
      title: "Tools & Cloud",
      skills: [
        { name: "Docker", icon: <SiDocker /> },
        { name: "GitHub", icon: <SiGithub /> },
        { name: "Maven", icon: <SiApachemaven /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "AWS Basics", icon: <FaAws /> },
      ]
    }
  ];

  return (
    <Section id="skills" title="Skills" className="bg-brand-gray-accent py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-16">
          {skillCategories.map((category, catIdx) => (
            <div key={catIdx} className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-6"
              >
                <div className="w-[6px] h-10 md:h-12 bg-brand-black" />
                <h4 className="font-montserrat font-bold text-[20px] md:text-[28px] text-brand-black tracking-[0.25em] uppercase">
                  {category.title}
                </h4>
              </motion.div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 md:gap-12">
                {category.skills.map((skill, skillIdx) => (
                  <SkillTile
                    key={skillIdx}
                    {...skill}
                    index={skillIdx}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;
