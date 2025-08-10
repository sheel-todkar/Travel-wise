import React from 'react';

const Logo = ({ size = 'normal' }) => {
  const sizeClasses = {
    small: 'text-2xl',
    normal: 'text-3xl',
    large: 'text-4xl'
  };

  return (
    <div className={`font-bold ${sizeClasses[size]} text-[#2563eb] flex items-center`}>
      <span className="text-[#1e40af]">Travel</span>
      <span className="text-[#3b82f6]">Wise</span>
      <span className="ml-2 text-sm font-normal text-gray-600">AI</span>
    </div>
  );
};

export default Logo;
