import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 p-4 fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">IPTV España</div>
        <div className="md:hidden flex items-center" onClick={toggleMenu}>
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </div>
        <div className={`md:flex space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
          <a href="#home" className="text-white hover:text-gray-400">Inicio</a>
          <a href="#plans" className="text-white hover:text-gray-400">Nuestros planes</a>
          <a href="#why-us" className="text-white hover:text-gray-400">Por qué elegirnos</a>
          <a href="#reviews" className="text-white hover:text-gray-400">Reseñas</a>
          <a href="#contact" className="text-white hover:text-gray-400">Contáctanos</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
