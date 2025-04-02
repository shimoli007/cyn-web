import React from 'react';

const Logo = ({ size = 'md', showText = true, className = '' }) => {
  const sizes = {
    sm: { svg: 30, fontSize: 'text-lg' },
    md: { svg: 40, fontSize: 'text-xl' },
    lg: { svg: 50, fontSize: 'text-2xl' },
  };
  
  const { svg, fontSize } = sizes[size] || sizes.md;
  
  return (
    <div className={`flex items-center ${className}`}>
      <svg width={svg} height={svg} viewBox="0 0 100 100" className="mr-2">
        <rect width="100" height="100" fill="#0c2350" />
        <path d="M30,30 C35,20 45,15 55,20 C65,25 75,35 70,50 C65,65 50,75 35,65 C25,60 25,40 35,35" 
              stroke="#FF8C00" strokeWidth="4" fill="none" />
        <path d="M50,50 L60,30 M50,50 L70,45 M50,50 L65,65" 
              stroke="#FF5E62" strokeWidth="3" />
        <circle cx="60" cy="30" r="3" fill="#FF8C00" />
        <circle cx="70" cy="45" r="3" fill="#FF8C00" />
        <circle cx="65" cy="65" r="3" fill="#FF5E62" />
      </svg>
      
      {showText && (
        <span className={`${fontSize} font-bold text-gray-800`}>cynea</span>
      )}
    </div>
  );
};

export default Logo;