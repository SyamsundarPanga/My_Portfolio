import React from 'react';
import Section from '../components/Section';
import GlassCard from '../components/GlassCard';
import { motion } from 'framer-motion';
import { User, Code2, Rocket, Heart } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="text-primary-500" />,
      title: "Clean Design",
      desc: "Architecting code that is maintainable, scalable, and efficient."
    },
    {
      icon: <Rocket className="text-blue-500" />,
      title: "Fast Delivery",
      desc: "Focused on high-performance applications and timely results."
    },
    {
      icon: <User className="text-purple-500" />,
      title: "User Centric",
      desc: "Building intuitive interfaces that prioritize user experience."
    }
  ];

  return (
    <Section id="about" title="About Me" subtitle="Know me better">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-6">
            Crafting Digital Experiences with <span className="text-gradient">Java & React</span>
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            I'm a passionate Full Stack Developer based in Visakhapatnam, India. With over a year of professional experience at <span className="text-white font-medium">BluePal</span>, I've honed my skills in both backend and frontend technologies.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            My journey into software development started with a curiosity for how complex systems work. Today, I build end-to-end solutions using the Java ecosystem combined with modern React interfaces. I enjoy solving complex problems and turning ideas into functional, beautiful realities.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {highlights.map((item, i) => (
              <GlassCard key={i} className="p-4" delay={i * 0.1}>
                <div className="mb-3">{item.icon}</div>
                <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </GlassCard>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative z-10 p-2 glass rounded-[2.5rem]">
            <div className="bg-dark-accent/50 rounded-[2rem] p-8 md:p-12 border border-white/5">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-500 font-bold text-xl">1+</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Years of Experience</h4>
                    <p className="text-gray-500 text-sm">Working with enterprise-level Java applications and modern frontends.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-500 font-bold text-xl">10+</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Projects Completed</h4>
                    <p className="text-gray-500 text-sm">From small business websites to complex SaaS platforms.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                    <Heart className="text-purple-500" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Passion Driven</h4>
                    <p className="text-gray-500 text-sm">Always keeping up with the latest industry trends and best practices.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Abstract Design Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[120%] h-[120%] bg-gradient-to-br from-primary-900/10 to-transparent blur-3xl opacity-50" />
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
