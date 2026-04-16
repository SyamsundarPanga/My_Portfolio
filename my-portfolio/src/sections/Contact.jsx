import React from 'react';
import Section from '../components/Section';
import GlassCard from '../components/GlassCard';
import Button from '../components/Button';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <Section id="contact" title="Contact" className="bg-brand-gray-accent">
      <div className="max-w-3xl mx-auto mb-16 px-4">
        <p className="font-open-sans font-normal text-[14px] md:text-[15px] leading-relaxed text-brand-black text-center opacity-80">
          Interested in working together or have a question? Feel free to reach out. 
          I typically respond within 24 hours to all enterprise and freelance inquiries.
        </p>
      </div>

      <div className="max-w-3xl mx-auto mb-24 px-4">
        <form className="space-y-8 md:space-y-12" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-8 md:space-y-12">
            {/* NAME */}
            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-[3px] md:w-[5px] h-[40px] md:h-[48px] bg-brand-black shrink-0" />
              <div className="flex-1 border-b-[3px] md:border-b-[5px] border-brand-black pb-1 md:pb-2">
                <input 
                  type="text" 
                  placeholder="ENTER YOUR NAME*" 
                  className="contact-input text-[12px] md:text-sm"
                />
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-[3px] md:w-[5px] h-[40px] md:h-[48px] bg-brand-black shrink-0" />
              <div className="flex-1 border-b-[3px] md:border-b-[5px] border-brand-black pb-1 md:pb-2">
                <input 
                  type="email" 
                  placeholder="ENTER YOUR EMAIL*" 
                  className="contact-input text-[12px] md:text-sm"
                />
              </div>
            </div>

            {/* PHONE */}
            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-[3px] md:w-[5px] h-[40px] md:h-[48px] bg-brand-black shrink-0" />
              <div className="flex-1 border-b-[3px] md:border-b-[5px] border-brand-black pb-1 md:pb-2">
                <input 
                  type="text" 
                  placeholder="PHONE NUMBER" 
                  className="contact-input text-[12px] md:text-sm"
                />
              </div>
            </div>

            {/* MESSAGE */}
            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-[3px] md:w-[5px] h-[120px] md:h-[184px] bg-brand-black shrink-0" />
              <div className="flex-1 border-b-[3px] md:border-b-[5px] border-brand-black pb-1 md:pb-2">
                <textarea 
                  rows="4" md:rows="6" 
                  placeholder="YOUR MESSAGE*" 
                  className="contact-input resize-none h-[100px] md:h-[150px] text-[12px] md:text-sm"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center pt-8 md:pt-12">
            <button className="flex items-center gap-6 md:gap-12 group cursor-pointer border-none bg-transparent">
              <div className="w-[2px] md:w-[3px] h-8 md:h-12 bg-brand-black" />
              <span className="font-montserrat font-bold text-[14px] md:text-[16px] tracking-[0.1em] text-brand-black">SUBMIT</span>
              <div className="w-[2px] md:w-[3px] h-8 md:h-12 bg-brand-black" />
            </button>
          </div>
        </form>
      </div>

    </Section>
  );
};

export default Contact;
