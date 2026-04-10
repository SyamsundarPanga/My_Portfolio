import React from 'react';

const Badge = ({ children, className = "" }) => {
  return (
    <span className={`px-3 py-1 text-xs font-medium rounded-full bg-primary-500/10 text-primary-400 border border-primary-500/20 backdrop-blur-sm ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
