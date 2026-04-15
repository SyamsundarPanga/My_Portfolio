import React from 'react';
import Section from '../components/Section';
import GlassCard from '../components/GlassCard';
import Badge from '../components/Badge';
import Button from '../components/Button';
import { motion } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const [filter, setFilter] = React.useState('ALL');
  
  const projects = [
    {
      title: "POS SaaS Application",
      category: "CODED",
      desc: "Comprehensive retail management system.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
      link: "#"
    },
    {
      title: "Civic Tech Website",
      category: "DESIGNED",
      desc: "Corporate IT showcase with high-perf pages.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      link: "#"
    },
    {
      title: "Dandu Interiors",
      category: "ALL",
      desc: "Portfolio for a premium design firm.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
      link: "#"
    },
    {
      title: "Real-Time Chat",
      category: "CODED",
      desc: "Scalable messaging using WebSockets.",
      image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=2070&auto=format&fit=crop",
      link: "#"
    }
  ];

  const filteredProjects = projects.filter(p => filter === 'ALL' || p.category === filter || p.category === 'ALL');

  return (
    <section id="projects" className="py-24 bg-brand-gray-dark text-white">
      <div className="container mx-auto px-6 text-center mb-24">
        <div className="boxed-header-light">
          PORTFOLIO
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-4xl mb-16">
        <div className="flex justify-center flex-wrap gap-8 font-montserrat font-semibold text-[14px] text-[#7C7C7C] border-b border-[#AAAAAA] pb-4">
          {['ALL', 'CODED', 'DESIGNED'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 transition-colors ${filter === cat ? 'text-white border-b-2 border-white translate-y-[18px]' : 'hover:text-white'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="group relative aspect-[640/400] overflow-hidden"
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-8 text-center">
              <h3 className="font-montserrat font-bold text-[25px] tracking-widest mb-2">{project.title}</h3>
              <p className="font-montserrat italic font-semibold text-[10px] tracking-widest mb-6 uppercase">
                {project.category}, designed
              </p>
              
              <div className="flex gap-12 mt-4">
                <div className="flex items-center gap-4 group/btn cursor-pointer">
                  <div className="w-[2px] h-6 bg-white" />
                  <span className="font-montserrat font-semibold text-[12px] tracking-widest">DEMO</span>
                  <div className="w-[2px] h-6 bg-white" />
                </div>
                <div className="flex items-center gap-4 group/btn cursor-pointer">
                  <div className="w-[2px] h-6 bg-white" />
                  <span className="font-montserrat font-semibold text-[12px] tracking-widest">MORE</span>
                  <div className="w-[2px] h-6 bg-white" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 text-center mt-32">
        <p className="font-montserrat font-semibold text-[20px] tracking-widest opacity-80">
          AND MANY MORE...
        </p>
      </div>
    </section>
  );
};

export default Projects;
