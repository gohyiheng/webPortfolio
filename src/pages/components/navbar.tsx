import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#f5efe9e6] text-[#2d2d2d] px-8 py-4 flex justify-between items-center shadow-md">
      <div className="text-xl font-semibold">
        <a href="#about" className="hover:underline">
          Yiheng's Portfolio
        </a>
      </div>
      <ul className="flex space-x-8 text-md font-medium">
        <li>
          <a href="/aboutDescriptions" className="hover:text-blue-600 transition-colors">
            About
          </a>
        </li>
        <li>
          <a href="/aboutProjects" className="hover:text-blue-600 transition-colors">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-600 transition-colors">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
