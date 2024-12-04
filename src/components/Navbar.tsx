import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-black p-4 fixed w-full top-0 left-0 z-50" style={{ height: '60px' }}>
      <div className="container mx-auto flex justify-between items-center" style={{ height: '100%' }}>
        {/* Logo */}
        <div>
          <img src="/images/1.png" alt="Logo" className="h-full object-contain" />
        </div>
        {/* Botón del menú hamburguesa */}
        <div className="md:hidden flex items-center" onClick={toggleMenu}>
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </div>
        {/* Menú de navegación */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } absolute top-16 left-0 w-full bg-black md:relative md:top-0 md:flex md:space-x-6`}
          style={{ marginLeft: 'auto' }} // Ajuste clave: Empuja el menú hacia la derecha
        >
          <a
            href="#home"
            className="block text-white py-2 px-4 hover:text-gray-400 md:py-0"
            onClick={closeMenu}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Inicio
          </a>
          <a
            href="#plans"
            className="block text-white py-2 px-4 hover:text-gray-400 md:py-0"
            onClick={closeMenu}
          >
            &nbsp;&nbsp;&nbsp;Nuestros planes
          </a>
          <a
            href="#reviews"
            className="block text-white py-2 px-4 hover:text-gray-400 md:py-0"
            onClick={closeMenu}
          >
            &nbsp;&nbsp;&nbsp;Reseñas
          </a>
          <a
            href="#contact"
            className="block text-white py-2 px-4 hover:text-gray-400 md:py-0"
            onClick={closeMenu}
          >
            &nbsp;&nbsp;&nbsp;Contáctanos
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
