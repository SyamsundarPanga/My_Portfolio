import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, title, subtitle, children, className = "", container = true }) => {
  return (
    <section id={id} className={`py-24 relative overflow-hidden ${className}`}>
      <div className={`${container ? 'container mx-auto px-6' : ''}`}>
        {(title || subtitle) && (
          <div className="mb-16 text-center md:text-left">
            {subtitle && (
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-primary-500 font-semibold tracking-widest uppercase text-sm mb-4 block"
              >
                {subtitle}
              </motion.span>
            )}
            {title && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold tracking-tight"
              >
                {title}
              </motion.h2>
            )}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100px' }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-1.5 bg-gradeint-to-r from-primary-600 to-blue-600 rounded-full mt-6 mx-auto md:mx-0"
            />
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
