import Link from 'next/link';
import React, { useState } from 'react';
import ClosingTheGap from './ctg';
import VetCare from './vetCare';
import Woofya from './woofya';

const Projects = () => {
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
      case 'woofya':
        return <Woofya />;
      default:
        return null;
    }
  };

  const projects = [
    {
      id: 'closing-the-gap',
      title: 'Closing The Gap',
      subtitle: 'Progress Tracker Web Application',
    },
    {
      id: 'vet-care',
      title: 'Vet Care',
      subtitle: 'Vet Clinic Management System',
    },
    {
      id: 'woofya',
      title: 'Woofya',
      subtitle: 'Social media for dog owners',
    },
    {
      id: 'village-gen',
      title: 'Minecraft Village Generator',
      subtitle: 'Tool to auto-generate villages in Minecraft',
    },
    {
      id: 'vacuum-game',
      title: 'Vacuum Cleaner Game',
      subtitle: 'Simple interactive game project',
    },
    {
      id: 'lc3',
      title: 'LC3 in Minecraft',
      subtitle: 'Minecraft-based simulation of the LC3 architecture',
    },
  ];

  return (
    <section className="px-8 py-16 mx-auto bg-gradient-to-b from-neutral-50 to-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-4 font-serif tracking-wider">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-gray-700 mx-auto rounded-full"></div>
          <p className="text-gray-700 text-lg mt-6 font-serif">Crafted with passion and precision</p>
        </div>

        {/* Projects grid*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project.id)}
              className="group relative bg-white hover:bg-gray-50 cursor-pointer rounded-2xl shadow-xl border-2 border-gray-200 hover:border-gray-400 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
            >
              {/* Decorative top accent */}
              <div className={`h-2 bg-gradient-to-r from-white-300 to-gray-700`}></div>
              
              <div className="p-8 relative">
                {/* corner decoration */}
                <div className="absolute top-6 right-6 w-6 h-6 border-r-2 border-t-2 border-gray-400 rounded-tr-lg"></div>
                <div className="absolute bottom-6 left-6 w-6 h-6 border-l-2 border-b-2 border-gray-400 rounded-bl-lg"></div>
                
                {/* Project number */}
                <div className="absolute top-4 left-4 w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>

                <div className="mt-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 font-serif group-hover:text-gray-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed font-medium">
                    {project.subtitle}
                  </p>
                </div>

                {/* Hover indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <div className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">→</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <div
              className="bg-white rounded-2xl w-full max-w-6xl h-[85vh] relative overflow-hidden shadow-2xl border-2 border-gray-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/*  top border */}
              <div className="h-2 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600"></div>
              
              {/* Close button */}
              <button
                className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-700 text-white rounded-full hover:from-gray-700 hover:to-gray-800 transition-all duration-300 flex items-center justify-center z-10 shadow-lg"
                onClick={closeModal}
              >
                <span className="text-xl leading-none">×</span>
              </button>

              {/* Modal content */}
              <div className="p-6 h-full overflow-y-auto">
                <div className="bg-gray-50/80 backdrop-blur-sm rounded-xl shadow-lg h-full">
                  {renderProjectComponent()}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default Projects;