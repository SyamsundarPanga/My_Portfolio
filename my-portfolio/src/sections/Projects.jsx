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
      title: "E-Commerce Marketplace",
      category: "CODED",
      desc: "Full-featured platform with product listings, cart, and auth.",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop",
      link: "#"
    },
    {
      title: "Food Delivery App",
      category: "CODED",
      desc: "Order management and real-time restaurant browsing.",
      image: "/projects/food-delivery.png",
      link: "#"
    },
    {
      title: "Real-Time Chat App",
      category: "CODED",
      desc: "Instant messaging using Java and WebSockets.",
      image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?q=80&w=2070&auto=format&fit=crop",
      link: "#"
    },
    {
      title: "Hospital Management",
      category: "CODED",
      desc: "Patient records and appointment scheduling system.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
      link: "#"
    },
    {
      title: "Hotel Management",
      category: "CODED",
      desc: "Reservation tracking and admin control platform.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
      link: "#"
    },
    {
      title: "Fitness Tracker",
      category: "CODED",
      desc: "Activity monitoring and health metrics tracking.",
      image: "/projects/fitness-tracker.png",
      link: "#"
    }
  ];


  return (
    <section id="projects" className="py-24 bg-brand-gray-dark text-white">
      <div className="container mx-auto px-6 text-center mb-24">
        <div className="boxed-header-light">
          PORTFOLIO
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
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
                {project.category}, developed
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

    </section>
  );
};

export default Projects;
