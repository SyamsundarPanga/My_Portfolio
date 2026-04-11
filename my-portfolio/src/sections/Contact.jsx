import React from 'react';
import Section from '../components/Section';
import GlassCard from '../components/GlassCard';
import Button from '../components/Button';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <Section id="contact" title="Contact" subtitle="Let's build something exceptional together. I'm currently available for full-time roles and freelance partnerships.">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="flex justify-center gap-8 mb-12">
            <a href="mailto:syamsundarpanga@gmail.com" className="text-sm font-black uppercase tracking-widest border-b-2 border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-all">Email Me</a>
            <a href="#" className="text-sm font-black uppercase tracking-widest border-b-2 border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-all">LinkedIn</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative group">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-transparent border-b-2 border-gray-200 py-4 focus:outline-none focus:border-black transition-colors font-bold text-black placeholder:text-gray-300"
                />
              </div>
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-transparent border-b-2 border-gray-200 py-4 focus:outline-none focus:border-black transition-colors font-bold text-black placeholder:text-gray-300"
                />
              </div>
            </div>

            <div className="relative group">
              <input 
                type="text" 
                placeholder="Subject" 
                className="w-full bg-transparent border-b-2 border-gray-200 py-4 focus:outline-none focus:border-black transition-colors font-bold text-black placeholder:text-gray-300"
              />
            </div>

            <div className="relative group">
              <textarea 
                rows="4" 
                placeholder="Tell me about your project..." 
                className="w-full bg-transparent border-b-2 border-gray-200 py-4 focus:outline-none focus:border-black transition-colors font-bold text-black placeholder:text-gray-300 resize-none"
              />
            </div>

            <div className="flex justify-center pt-8">
              <Button className="px-16 py-5 text-xl font-black uppercase tracking-widest">
                Send Message <Send size={20} />
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;
