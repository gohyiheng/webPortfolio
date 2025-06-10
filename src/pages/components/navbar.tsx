import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 mb-6 z-50 bg-gradient-to-r from-gray-50 to-neutral-50 border-b-2 border-gray-200 shadow-lg backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-8 py-6">
        <div className="flex justify-between items-center">
          <div className="hover:text-gray-600 transition-all duration-300 flex items-center space-x-2">
            <Link href='/' className="font-serif text-lg md:text-xl">Yiheng&#39;s Portfolio</Link>
          </div>

          {/* Desktop Navigation menu */}
          <ul className="hidden md:flex space-x-12 text-lg font-medium">
            <li className="relative">
              <Link
                href="/aboutDescription"
                className="text-gray-800 hover:text-gray-600 transition-all duration-300 relative group py-2"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-600 to-gray-700 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li className="relative">
              <Link
                href="/aboutProjects"
                className="text-gray-800 hover:text-gray-600 transition-all duration-300 relative group py-2"
              >
                Projects
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-600 to-gray-700 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li className="relative">
              <Link
                href="#contact"
                className="text-gray-800 hover:text-gray-600 transition-all duration-300 relative group py-2"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-600 to-gray-700 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          </ul>

          {/* Mobile hamburger button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
          <ul className="flex flex-col space-y-4 pt-6 pb-4 text-lg font-medium">
            <li>
              <Link
                href="/aboutDescription"
                onClick={closeMenu}
                className="block text-gray-800 hover:text-gray-600 transition-all duration-300 py-2 px-4 hover:bg-gray-100 rounded-md"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/aboutProjects"
                onClick={closeMenu}
                className="block text-gray-800 hover:text-gray-600 transition-all duration-300 py-2 px-4 hover:bg-gray-100 rounded-md"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                onClick={closeMenu}
                className="block text-gray-800 hover:text-gray-600 transition-all duration-300 py-2 px-4 hover:bg-gray-100 rounded-md"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
     
      {/* decorative border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
    </nav>
  );
};

export default Navbar;