import React, { useState } from 'react';
import Logo from '../assets/Logo.png';
import Button from './Buttons/Button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="relative py-2 shadow-md overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#D32F2F] via-[#FF7043] to-[#FFC107] animate-bg-translate"></div>
      <div className="max-w-screen-xl mx-auto relative z-10 px-2">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="bg-white rounded-full p-2 shadow-md m-5">
            <img 
              src={Logo} 
              alt="Logo" 
              className="h-16 object-contain" 
              style={{ filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.3))' }}
            />
          </div>
          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-8 items-center text-white">
            <li className="hover:text-[#FFC107] cursor-pointer transition-colors duration-300">Home</li>
            <li className="hover:text-[#FFC107] cursor-pointer transition-colors duration-300">Sobre</li>
            <li className="hover:text-[#FFC107] cursor-pointer transition-colors duration-300">Garagem</li>
            <li className="hover:text-[#FFC107] cursor-pointer transition-colors duration-300">Contate-nos</li>
            <Button className="px-4 py-2 rounded-md font-semibold bg-white text-black hover:bg-[#FF5722] transition-all">
              Test Drive
            </Button>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white" 
            onClick={toggleMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Mobile Nav Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg absolute top-16 left-0 right-0 px-6 py-4 z-20">
            <ul className="flex flex-col gap-4 items-center text-black">
              <li className="hover:text-[#FFC107] cursor-pointer transition-colors duration-300">Home</li>
              <li className="hover:text-[#FFC107] cursor-pointer transition-colors duration-300">Sobre</li>
              <li className="hover:text-[#FFC107] cursor-pointer transition-colors duration-300">Garagem</li>
              <li className="hover:text-[#FFC107] cursor-pointer transition-colors duration-300">Contate-nos</li>
              <Button className="px-4 py-2 rounded-md font-semibold bg-[#FF5722] text-white hover:bg-[#FF7043] transition-all">
                Test Drive
              </Button>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
