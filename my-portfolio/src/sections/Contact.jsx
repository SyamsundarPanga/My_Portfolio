import React from 'react';
import Section from '../components/Section';
import GlassCard from '../components/GlassCard';
import Button from '../components/Button';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <Section id="contact" title="Get In Touch" subtitle="Contact Me">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-6">Let's discuss your next <span className="text-gradient">Great Idea</span></h3>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            I'm currently available for freelance work or full-time positions. If you have a project in mind or just want to say hi, feel free to reach out!
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-2xl bg-primary-500/10 flex items-center justify-center text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Email</p>
                <a href="mailto:syamsundarpanga@gmail.com" className="text-xl font-bold hover:text-primary-400 transition-colors">syamsundarpanga@gmail.com</a>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Phone</p>
                <a href="tel:+91XXXXXXXXXX" className="text-xl font-bold hover:text-blue-400 transition-colors">+91 XXXXX XXXXX</a>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Location</p>
                <p className="text-xl font-bold">Visakhapatnam, India</p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-sm text-gray-500 font-bold uppercase tracking-widest mb-6">Follow Me</p>
            <div className="flex gap-4">
              {[
                { icon: <FaGithub size={20} />, href: "#" },
                { icon: <FaLinkedin size={20} />, href: "#" },
                { icon: <FaTwitter size={20} />, href: "#" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href}
                  className="w-12 h-12 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-600 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <GlassCard className="p-8">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Subject</label>
                <input 
                  type="text" 
                  placeholder="Project Consultation" 
                  className="w-full bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-500 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Message</label>
                <textarea 
                  rows="5" 
                  placeholder="Tell me about your project..." 
                  className="w-full bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                />
              </div>

              <Button className="w-full py-4 text-lg">
                Send Message <Send size={20} />
              </Button>
            </form>
          </GlassCard>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;
