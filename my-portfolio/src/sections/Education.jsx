import React, { useRef } from 'react';
import Section from '../components/Section';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { GraduationCap, MapPin, User } from 'lucide-react';

const Education = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Smooth out the scroll progress for the character movement
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Map progress to CSS offset-distance (0% to 100%)
  const offsetDistance = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  const educationData = [
    {
      degree: "B.Tech in Computer Science",
      timeline: "2017 – 2021",
      institution: "Institute of Engineering & Technology",
      description: "Focused on algorithm design, software systems, and full-stack architectures. Developed a deep understanding of core engineering principles.",
      specialization: "Computer Science and Software Systems"
    },
    {
      degree: "Intermediate (MPC)",
      timeline: "2015 – 2017",
      institution: "Royal Science College",
      description: "Specialized in Mathematics, Physics, and Chemistry. Built strong analytical foundations required for advanced engineering studies.",
      specialization: "Junior College"
    },
    {
      degree: "10th Class",
      timeline: "2014 – 2015",
      institution: "St. Xavier's International School",
      description: "Focusing on mathematics and basic physics, graduating with top honors. Developed the initial logic and problem-solving mindset.",
      specialization: "High Schooling Foundation"
    }
  ];

  // Zig-zag path for desktop: M50,0 Q50,150 20,300 T50,600 T80,900 T50,1200
  // Simplified path for CSS offset-path
  const roadPath = "M 50 0 C 50 100, 10 150, 10 250 C 10 350, 90 400, 90 500 C 90 600, 50 650, 50 750";

  return (
    <Section id="education" title="Education" subtitle="My academic roadmap." className="bg-brand-gray-accent overflow-visible">
      <div ref={containerRef} className="relative max-w-5xl mx-auto py-20 min-h-[1000px]">
        {/* The Roadmap Path (SVG) */}
        <div className="absolute inset-0 flex justify-center pointer-events-none opacity-20">
          <svg className="h-full w-full max-w-[400px]" viewBox="0 0 100 750" fill="none" preserveAspectRatio="none">
            <motion.path
              d={roadPath}
              stroke="black"
              strokeWidth="2"
              strokeDasharray="8 8"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2 }}
            />
          </svg>
        </div>

        {/* The Traveling Character */}
        <motion.div 
          style={{ 
            offsetPath: `path("${roadPath}")`,
            offsetDistance: offsetDistance,
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)'
          }}
          className="z-30 hidden md:block"
        >
          <div className="w-12 h-12 bg-brand-black rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
            <User size={20} className="text-white" />
          </div>
          {/* Label */}
          <div className="absolute top-14 left-1/2 -translate-x-1/2 whitespace-nowrap bg-brand-black px-2 py-1 rounded text-[10px] font-bold text-white uppercase tracking-tighter shadow-xl">
            Syam
          </div>
        </motion.div>

        {/* Milestone Cards */}
        <div className="space-y-32 md:space-y-0 relative z-20">
          {educationData.map((edu, i) => (
            <div 
              key={i} 
              className={`flex flex-col md:flex-row items-center justify-between w-full md:h-[250px] ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Card Container */}
              <motion.div 
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full md:w-[42%] group"
              >
                <div className="bg-white/40 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative">
                  {/* Floating Graduation Cap */}
                  <div className="absolute -top-6 -right-6 w-12 h-12 bg-brand-black rounded-xl flex items-center justify-center shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                    <GraduationCap size={24} className="text-white" />
                  </div>

                  <span className="text-[12px] font-black uppercase tracking-[0.3em] text-black/40 mb-2 block">{edu.timeline}</span>
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-black mb-1 font-poppins">{edu.degree}</h3>
                  <p className="text-[11px] md:text-[13px] font-bold uppercase tracking-[0.1em] text-gray-600 mb-4 font-inter">{edu.institution}</p>
                  
                  <p className="text-gray-700 text-[14px] md:text-[15px] leading-relaxed font-medium font-inter">
                    {edu.description}
                  </p>
                </div>
              </motion.div>

              {/* Path Milestone Indicator (Mobile/Hidden Desktop) */}
              <div className="w-8 h-8 rounded-full bg-brand-black border-4 border-white shadow-lg my-8 md:my-0 relative z-10 md:hidden">
                <MapPin size={16} className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>

              {/* Empty Space for alignment */}
              <div className="hidden md:block w-[42%]" />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Education;
