import React, { useState } from 'react';
import Section from '../components/Section';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    try {
      await emailjs.send(
        'service_at90bwx',
        'template_jd6u4we',
        {
          user_name: formData.name,
          user_email: formData.email,
          user_phone: formData.phone,
          user_message: formData.message,
          to_name: 'Syam'
        },
        'LAlBT4tuC8_xPhPWo'
      );

      setStatus({ submitting: false, success: true, error: null });
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
    } catch (err) {
      console.error('EmailJS Error:', err);
      setStatus({ submitting: false, success: false, error: 'Failed to send message. Please try again.' });
    }
  };

  return (
    <Section id="contact" title="Contact" className="bg-brand-gray-accent">
      <div className="max-w-3xl mx-auto mb-16 px-4">
        <p className="font-open-sans font-normal text-[14px] md:text-[15px] leading-relaxed text-brand-black text-center opacity-80">
          Interested in working together or have a question? Feel free to reach out. 
          I typically respond within 24 hours to all enterprise and freelance inquiries.
        </p>
      </div>

      <div className="max-w-3xl mx-auto mb-24 px-4">
        <form className="space-y-8 md:space-y-12" onSubmit={handleSubmit}>
          <div className="space-y-8 md:space-y-12">
            {/* NAME */}
            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-[3px] md:w-[5px] h-[40px] md:h-[48px] bg-brand-black shrink-0" />
              <div className="flex-1 border-b-[3px] md:border-b-[5px] border-brand-black pb-1 md:pb-2">
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="ENTER YOUR NAME*" 
                  className="contact-input text-[12px] md:text-sm bg-transparent outline-none w-full font-montserrat font-bold uppercase tracking-widest placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-[3px] md:w-[5px] h-[40px] md:h-[48px] bg-brand-black shrink-0" />
              <div className="flex-1 border-b-[3px] md:border-b-[5px] border-brand-black pb-1 md:pb-2">
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="ENTER YOUR EMAIL*" 
                  className="contact-input text-[12px] md:text-sm bg-transparent outline-none w-full font-montserrat font-bold uppercase tracking-widest placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* PHONE */}
            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-[3px] md:w-[5px] h-[40px] md:h-[48px] bg-brand-black shrink-0" />
              <div className="flex-1 border-b-[3px] md:border-b-[5px] border-brand-black pb-1 md:pb-2">
                <input 
                  type="text" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="PHONE NUMBER" 
                  className="contact-input text-[12px] md:text-sm bg-transparent outline-none w-full font-montserrat font-bold uppercase tracking-widest placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* MESSAGE */}
            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-[3px] md:w-[5px] h-[120px] md:h-[184px] bg-brand-black shrink-0" />
              <div className="flex-1 border-b-[3px] md:border-b-[5px] border-brand-black pb-1 md:pb-2">
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4" 
                  placeholder="YOUR MESSAGE*" 
                  className="contact-input resize-none h-[100px] md:h-[150px] text-[12px] md:text-sm bg-transparent outline-none w-full font-montserrat font-bold uppercase tracking-widest placeholder:text-gray-400"
                />
              </div>
            </div>
          </div>

          {/* Feedback Messages */}
          <AnimatePresence>
            {status.success && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center gap-2 text-green-600 font-bold uppercase tracking-widest text-[12px]"
              >
                <CheckCircle2 size={16} />
                <span>Message sent successfully!</span>
              </motion.div>
            )}
            {status.error && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center gap-2 text-red-600 font-bold uppercase tracking-widest text-[12px]"
              >
                <AlertCircle size={16} />
                <span>{status.error}</span>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex justify-center pt-8 md:pt-12">
            <button 
              disabled={status.submitting}
              className={`flex items-center gap-6 md:gap-12 group cursor-pointer border-none bg-transparent transition-opacity ${status.submitting ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-80'}`}
            >
              <div className="w-[2px] md:w-[3px] h-8 md:h-12 bg-brand-black" />
              <span className="font-montserrat font-bold text-[14px] md:text-[16px] tracking-[0.1em] text-brand-black flex items-center gap-2">
                {status.submitting ? (
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    SENDING...
                  </>
                ) : 'SUBMIT'}
              </span>
              <div className="w-[2px] md:w-[3px] h-8 md:h-12 bg-brand-black" />
            </button>
          </div>
        </form>
      </div>

    </Section>
  );
};

export default Contact;
