import Link from 'next/link';
import React, { useState } from 'react';
import ClosingTheGap from './ctg';
import VetCare from './vetCare';

const Navbar = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const handleProjectClick = (project: string) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const renderProjectComponent = () => {
    switch (selectedProject) {
      case 'closing-the-gap':
        return <ClosingTheGap />;
      case 'vet-care':
        return <VetCare />;
      default:
        return null;
    }
  };

  return (
    <section className="px-8 py-12 mx-auto">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <ul className="flex flex-wrap gap-4 list-none m-0 p-0">
        <li
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full cursor-pointer"
          onClick={() => handleProjectClick('closing-the-gap')}
        >
          <b>Closing The Gap</b> - Progress Tracker Web Application
        </li>

        <li
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full cursor-pointer"
          onClick={() => handleProjectClick('vet-care')}
        >
          <b>Vet Care</b> - Vet Clinic Management System
        </li>

        <li className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full">
          Web app - woofya
        </li>

        <li className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full">
          Minecraft village generator
        </li>

        <li className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full">
          Vacuum cleaner game
        </li>

        <li className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full">
          LC3 - Minecraft
        </li>
      </ul>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-white/20 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-6 rounded-xl w-full max-w-4xl h-[80vh] relative overflow-y-auto shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-2xl"
              onClick={closeModal}
            >
              ✕
            </button>
            {renderProjectComponent()}
          </div>
        </div>
      )}
    </section>
  );
};

export default Navbar;
