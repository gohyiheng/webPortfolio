import React from 'react';
import Link from 'next/link';
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 mb-6 z-50 bg-gradient-to-r from-gray-50 to-neutral-50 border-b-2 border-gray-200 shadow-lg backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-8 py-6">
        <div className="flex justify-between items-center">
            <div className="hover:text-gray-600 transition-all duration-300 flex items-center space-x-2">
              <Link href='/' className="font-serif">Yiheng&#39;s Portfolio</Link>
            </div>

          {/* Navigation menu */}
          <ul className="flex space-x-12 text-lg font-medium">
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
        </div>
      </div>
     
      {/* decorative border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
    </nav>
  );
};
export default Navbar;