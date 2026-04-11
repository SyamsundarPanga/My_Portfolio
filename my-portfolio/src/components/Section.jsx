import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, title, subtitle, children, className = "", container = true }) => {
  return (
    <section id={id} className={`py-24 relative overflow-hidden ${className}`}>
      <div className={`${container ? 'container mx-auto px-6' : ''}`}>
        {(title || subtitle) && (
          <div className="mb-20 text-center flex flex-col items-center">
            {title && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="boxed-header bg-white mb-6"
              >
                {title}
              </motion.div>
            )}
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-500 font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs max-w-xl leading-relaxed"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
