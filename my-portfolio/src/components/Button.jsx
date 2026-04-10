import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, onClick, variant = 'primary', className = "", href, target }) => {
  const baseStyles = "px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 group relative overflow-hidden";
  
  const variants = {
    primary: "bg-primary-600 text-white hover:bg-primary-700 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]",
    secondary: "glass-dark text-white hover:bg-white/10 border-white/10 hover:border-white/20",
    outline: "bg-transparent border border-primary-500/50 text-white hover:bg-primary-500/10",
    ghost: "bg-transparent text-gray-400 hover:text-white hover:bg-white/5",
  };

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-gradient-x" />
      )}
    </>
  );

  if (href) {
    return (
      <a 
        href={href} 
        target={target || "_self"} 
        rel={target === "_blank" ? "noopener noreferrer" : ""}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {content}
    </motion.button>
  );
};

export default Button;
