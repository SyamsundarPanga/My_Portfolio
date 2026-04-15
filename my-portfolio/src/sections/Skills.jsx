import React from 'react';
import Section from '../components/Section';
import GlassCard from '../components/GlassCard';
import Badge from '../components/Badge';
import { motion } from 'framer-motion';
import { 
  SiSpringboot, SiReact, SiJavascript, 
  SiTypescript, SiTailwindcss, SiMysql, SiPostgresql, 
  SiMongodb, SiDocker, SiGit,
  SiPostman, SiHibernate, SiHtml5, SiCss, SiSass, SiBootstrap, SiFigma, SiNodedotjs
} from 'react-icons/si';
import { FaJava, FaAws } from 'react-icons/fa';
import { Database, Layout, Server, Settings } from 'lucide-react';

const Skills = () => {
  const sections = [
    {
      title: "USING NOW:",
      skills: [
        { name: "HTML5", icon: <SiHtml5 className="text-[#FF5722]" /> },
        { name: "CSS3", icon: <SiCss className="text-[#2196F3]" /> },
        { name: "SASS", icon: <SiSass className="text-[#CF649A]" /> },
        { name: "JAVASCRIPT", icon: <SiJavascript className="text-[#F7DF1E]" /> },
        { name: "REACT", icon: <SiReact className="text-[#61DAFB]" /> },
        { name: "BOOTSTRAP", icon: <SiBootstrap className="text-[#563D7C]" /> },
        { name: "GIT", icon: <SiGit className="text-[#F05032]" /> },
        { name: "FIGMA", icon: <SiFigma className="text-[#F24E1E]" /> },
      ]
    },
    {
      title: "LEARNING:",
      skills: [
        { name: "NODEJS", icon: <SiNodedotjs className="text-[#339933]" /> },
        { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
        { name: "MONGODB", icon: <SiMongodb className="text-[#47A248]" /> },
        { name: "TYPESCRIPT", icon: <SiTypescript className="text-[#3178C6]" /> },
      ]
    },
    {
      title: "OTHER SKILLS:",
      skills: [
        { name: "JAVA", icon: <FaJava className="text-[#007396]" /> },
        { name: "SPRING BOOT", icon: <SiSpringboot className="text-[#6DB33F]" /> },
        { name: "DOCKER", icon: <SiDocker className="text-[#2496ED]" /> },
        { name: "C++", icon: null },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-brand-gray-accent">
      <div className="container mx-auto px-6 text-center mb-32">
        <div className="boxed-header">
          SKILLS
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="space-y-32">
          {sections.map((section, idx) => (
            <div key={idx} className="space-y-16">
              <h4 className="font-montserrat font-bold text-[30px] text-brand-black tracking-[0.18em] text-center md:text-left">
                {section.title}
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-20 gap-x-12">
                {section.skills.map((skill, sIdx) => (
                  <motion.div 
                    key={sIdx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: sIdx * 0.05 }}
                    className="flex flex-col items-center gap-6 group"
                  >
                    <div className="text-[100px] transition-transform duration-300 group-hover:scale-110 grayscale hover:grayscale-0 opacity-80 group-hover:opacity-100">
                      {skill.icon || <div className="w-24 h-24 bg-brand-gray-light rounded-full flex items-center justify-center font-bold text-black">{skill.name[0]}</div>}
                    </div>
                    <span className="font-montserrat font-normal text-[24px] text-brand-black tracking-[0.13em] text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
