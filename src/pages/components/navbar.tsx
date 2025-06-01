import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-50 to-neutral-50 border-b-2 border-gray-200 shadow-lg backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex justify-between items-center">
          {/* Logo with Japanese-inspired typography */}
          <div className="text-2xl font-bold text-gray-800 tracking-wide">
            <a href="#about" className="hover:text-gray-600 transition-all duration-300 flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">一</span>
              </div>
              <span className="font-serif">Yiheng's Portfolio</span>
            </a>
          </div>
         
          {/* Navigation menu with traditional spacing */}
          <ul className="flex space-x-12 text-lg font-medium">
            <li className="relative">
              <a
                href="/aboutDescriptions"
                className="text-gray-800 hover:text-gray-600 transition-all duration-300 relative group py-2"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-600 to-gray-700 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li className="relative">
              <a
                href="/aboutProjects"
                className="text-gray-800 hover:text-gray-600 transition-all duration-300 relative group py-2"
              >
                Projects
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-600 to-gray-700 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li className="relative">
              <a
                href="#contact"
                className="text-gray-800 hover:text-gray-600 transition-all duration-300 relative group py-2"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-600 to-gray-700 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
     
      {/* Subtle decorative border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
    </nav>
  );
};
export default Navbar;