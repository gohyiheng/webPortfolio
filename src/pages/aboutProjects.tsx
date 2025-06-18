import React from 'react';
import Image from 'next/image'
import { useRouter } from 'next/router';
import Navbar from './components/navbar';
import Contact from './components/contact';

const Projects = () => {
  const router = useRouter();

  const handleProjectClick = (projectId: string) => {
    // Navigate to the specific project page
    router.push(`/projects_detailed/${projectId}`);
  };

  const projects = [
    {
      id: 'vet-care',
      title: 'Vet Care',
      subtitle: 'Vet Clinic Management System',
      image: '/img/cover/vetcare_cover.png',
    },
    {
      id: 'minecraft',
      title: 'Minecraft Village Generator',
      subtitle: 'Tool to auto-generate villages in Minecraft',
      image: '/img/cover/minecraft_cover.png',
    },
    // TODO: add detailed desc
    // {
    //   id: 'woofya',
    //   title: 'Woofya',
    //   subtitle: 'Social media for dog owners',
    //   image: '/img/cover/woofya_cover.png',
    // },
    // TODO: add detailed desc
    // {
    //   id: 'vacuum-game',
    //   title: 'Vacuum Cleaner Game',
    //   subtitle: 'Simple interactive game project',
    //   image: '/img/cover/vacuum_cover.png',
    // },
    {
      id: 'ctg',
      title: 'Closing The Gap',
      subtitle: 'Progress Tracker Web Application',
      image: '/img/cover/ctg_cover.png',
    },
    // TODO: add detailed desc
    // {
    //   id: 'Japan-cities',
    //   title: 'Japan Travel Recommender',
    //   subtitle: 'Ranks cities in japan based on data from japan guide',
    //   image: '',
    // },
  ];

  return (
    <>
    <Navbar/>
      <div className="max-w-6xl mx-auto px-8 pt-30">
        {projects.map((project, index) => (
          <div
            key={project.id}
            onClick={() => handleProjectClick(project.id)}
            className={`flex flex-col md:flex-row items-center cursor-pointer overflow-hidden mb-6 ${
              index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
            }`}
          >
            {/* Image */}
            <div className="w-full md:w-[60%] h-64 md:h-[500px] flex justify-center items-center overflow-hidden group p-4 relative">
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover rounded-2xl transition-transform duration-700 group-hover:scale-[1.02] shadow-lg"
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
              )}
            </div>
            {/* Text */}
            <div className="w-full md:w-[40%] px-12 py-6 flex flex-col justify-center h-64 md:h-[500px]">
              <h2 className="text-4xl text-center font-bold text-gray-800 mb-6 leading-tight">
                {project.title}
              </h2>
              {/* Solid line separator */}
              <div className="w-full h-0.5 bg-gray-400 mb-6"></div>
              <p className="text-lg lg:text-xl text-center text-gray-700 leading-relaxed">
                {project.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    <Contact/>
    </>
  );
};

export default Projects;