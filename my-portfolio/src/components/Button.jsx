import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, onClick, variant = 'primary', className = "", href, target }) => {
  const baseStyles = "px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 group relative overflow-hidden";
  
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800 shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)]",
    secondary: "bg-gray-100 text-black hover:bg-gray-200 border-gray-200",
    outline: "bg-transparent border border-black text-black hover:bg-black/5",
    ghost: "bg-transparent text-gray-600 hover:text-black hover:bg-black/5",
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
