import React from "react";

const TextGradient = ({ children, className = "" }) => {
  return (
    <span
      className={`text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent flex items-center gap-2 ${className}`}
    >
      {children}
    </span>
  );
};

export default TextGradient;