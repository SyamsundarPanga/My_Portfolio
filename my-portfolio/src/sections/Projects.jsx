import React from 'react';
import Section from '../components/Section';
import GlassCard from '../components/GlassCard';
import Badge from '../components/Badge';
import Button from '../components/Button';
import { motion } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "POS SaaS Application",
      subtitle: "Featured Project",
      desc: "A comprehensive Point of Sale system built for retail businesses, featuring real-time inventory tracking, multi-store management, and advanced analytics dashboards.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
      tech: ["Spring Boot", "MySQL", "React", "Redux", "Docker"],
      live: "#",
      github: "#",
      featured: true
    },
    {
      title: "Civic Technologies Website",
      desc: "A corporate website for an IT solutions provider, focusing on high-performance landing pages and seamless user navigation.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      tech: ["React", "JavaScript", "Tailwind CSS"],
      live: "#",
      github: "#"
    },
    {
      title: "Dandu Interiors Website",
      desc: "Portfolio website for a premium interior design firm, showcasing high-resolution galleries and interactive project timelines.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
      tech: ["React", "Framer Motion", "Tailwind"],
      live: "#",
      github: "#"
    },
    {
      title: "Real-Time Chat App",
      desc: "Scalable chat application featuring instant messaging, group channels, and file sharing using WebSockets and Microservices.",
      image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=2070&auto=format&fit=crop",
      tech: ["Java", "Spring Boot", "RabbitMQ", "React"],
      github: "#"
    }
  ];

  return (
    <Section id="projects" title="Selected Projects" subtitle="My Recent Work">
      <div className="space-y-16">
        {/* Featured Project */}
        {projects.filter(p => p.featured).map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <GlassCard className="p-0 overflow-hidden" hover={false}>
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative overflow-hidden aspect-video lg:aspect-auto">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-primary-900/20 group-hover:opacity-0 transition-opacity" />
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-primary-400 font-bold uppercase tracking-widest text-xs mb-4">
                    <Star size={14} fill="currentColor" /> {project.subtitle}
                  </div>
                  <h3 className="text-4xl font-bold mb-6">{project.title}</h3>
                  <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                    {project.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.tech.map((t, idx) => (
                      <Badge key={idx}>{t}</Badge>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <Button href={project.live} target="_blank" className="min-w-[140px]">
                      Live Demo <ExternalLink size={18} />
                    </Button>
                    <Button href={project.github} target="_blank" variant="secondary" className="min-w-[140px]">
                      Source Code <FaGithub size={18} />
                    </Button>
                  </div>
                </div>
              </div>
            </GlassCard>
            
            {/* Background Glow for Featured */}
            <div className="absolute -z-10 -top-10 -left-10 w-full h-full bg-primary-600/5 blur-[100px] rounded-full" />
          </motion.div>
        ))}

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.filter(p => !p.featured).map((project, i) => (
            <GlassCard key={i} className="p-0 flex flex-col h-full" delay={i * 0.1}>
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent" />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, idx) => (
                    <Badge key={idx} className="text-[10px] px-2 py-0.5">{t}</Badge>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 mt-auto">
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors">
                      <FaGithub size={20} />
                    </a>
                  )}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;
