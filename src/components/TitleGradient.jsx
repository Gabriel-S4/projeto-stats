import React from 'react'

const TitleGradient = ({ children, className = "" }) => {
    return (
      <span
        className={`text-2xl font-bold bg-gradient-to-r from-[#8f05d6] to-[#3b82f6] bg-clip-text text-transparent flex items-center gap-2 ${className}`}
      >
        {children}
      </span>
    );
  };

export default TitleGradient
