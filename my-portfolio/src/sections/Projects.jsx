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
    <Section id="projects" title="Portfolio" subtitle="A collection of my recent projects featuring scalable Java backends and modern React frontends." className="bg-black text-white">
      <div className="space-y-16">
        {/* Simplified Project Grid as seen in screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-white/10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-square overflow-hidden bg-black border border-white/10"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-8 text-center">
                <h3 className="text-xl font-black uppercase tracking-widest mb-4">{project.title}</h3>
                <p className="text-xs text-gray-300 mb-6 font-bold">{project.desc}</p>
                <div className="flex gap-4">
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition-all">
                      <ExternalLink size={18} />
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition-all">
                      <FaGithub size={18} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;
