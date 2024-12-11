import React from 'react';

const Button = ({ className= '', children, ...props }) => {
  return (
    <button
        className={`bg-white text-black hover:bg-[#FF5722] cursor-pointer px-4 py-2 rounded-md font-semibold  ${className}`}
        {...props}
    >
        {children}
    </button>
  );
};

export default Button