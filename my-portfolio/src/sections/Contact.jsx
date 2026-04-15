import React from 'react';
import Section from '../components/Section';
import GlassCard from '../components/GlassCard';
import Button from '../components/Button';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-brand-gray-accent relative">
      <div className="container mx-auto px-6 text-center mb-20">
        <div className="boxed-header mb-12">
          CONTACT
        </div>
        
        <p className="font-open-sans font-normal text-[15px] leading-relaxed text-brand-black max-w-3xl mx-auto text-center">
          Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. 
          Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est.
        </p>
      </div>

      <div className="container mx-auto px-6 max-w-3xl mb-32">
        <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-12">
            {/* NAME */}
            <div className="flex items-start gap-4">
              <div className="w-[5px] h-[48px] bg-brand-black shrink-0" />
              <div className="flex-1 border-b-[5px] border-brand-black pb-2">
                <input 
                  type="text" 
                  placeholder="ENTER YOUR NAME*" 
                  className="contact-input"
                />
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex items-start gap-4">
              <div className="w-[5px] h-[48px] bg-brand-black shrink-0" />
              <div className="flex-1 border-b-[5px] border-brand-black pb-2">
                <input 
                  type="email" 
                  placeholder="ENTER YOUR EMAIL*" 
                  className="contact-input"
                />
              </div>
            </div>

            {/* PHONE */}
            <div className="flex items-start gap-4">
              <div className="w-[5px] h-[48px] bg-brand-black shrink-0" />
              <div className="flex-1 border-b-[5px] border-brand-black pb-2">
                <input 
                  type="text" 
                  placeholder="PHONE NUMBER" 
                  className="contact-input"
                />
              </div>
            </div>

            {/* MESSAGE */}
            <div className="flex items-start gap-4">
              <div className="w-[5px] h-[184px] bg-brand-black shrink-0" />
              <div className="flex-1 border-b-[5px] border-brand-black pb-2">
                <textarea 
                  rows="6" 
                  placeholder="YOUR MESSAGE*" 
                  className="contact-input resize-none h-[150px]"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center pt-12">
            <button className="flex items-center gap-12 group cursor-pointer border-none bg-transparent">
              <div className="w-[3px] h-12 bg-brand-black" />
              <span className="font-montserrat font-bold text-[16px] tracking-[0.1em] text-brand-black">SUBMIT</span>
              <div className="w-[3px] h-12 bg-brand-black" />
            </button>
          </div>
        </form>
      </div>

      <div className="flex justify-center mb-8 opacity-20">
        <div className="w-40 h-[12px] border-y-2 border-brand-black" />
      </div>
    </section>
  );
};

export default Contact;
