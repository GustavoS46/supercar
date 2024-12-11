import React from 'react';

const ButtonTow = ({ className= '', children, ...props }) => {
  return (
    <button
        className={`bg-[#FFC107] text-black font-semibold px-4 py-2 rounded-md hover:bg-[#d89d15] transition-all flex items-center ${className}`}
        {...props}
    >
        {children}
    </button>
  );
};

export default ButtonTow