import React from 'react';

const Badge = ({ children, className = "" }) => {
  return (
    <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-black/5 text-black border border-black/10 backdrop-blur-sm ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
