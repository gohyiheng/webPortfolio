import { useState } from 'react';
import Image from 'next/image';
import Navbar from './components/navbar';
import Contact from './components/contact';
import Link from 'next/link';
export default function AboutPage() {

    type SectionKey = 'journey' | 'experience' | 'interests' | 'photography' | 'philosophy';
    const [activeSection, setActiveSection] = useState<SectionKey>('journey');

    const sections = {
      journey: {
        title: 'Academic Journey',
        content: (
          <div className="space-y-6">
            <div className="border-l-2 border-gray-300 pl-6 ml-4">
              <div className="mb-6">
                <h4 className="text-lg font-medium text-gray-900 mb-2">RMIT University</h4>
                <p className="text-gray-600 text-sm mb-2">2022 - 2025 (Graduating Soon)</p>
                <p className="text-gray-800">Currently in my final year, preparing to transition from academic life to professional opportunities. Seeking roles where I can apply my technical knowledge and systematic approach to problem-solving.</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">Singapore Polytechnic</h4>
                <p className="text-gray-600 text-sm mb-2">2017 - 2020</p>
                <p className="text-gray-800">Foundation years that introduced me to systematic thinking and technical problem-solving approaches that continue to guide my work today.</p>
              </div>
            </div>
            
            {/* Resume Download Section */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="text-center">
                <h4 className="text-lg font-medium text-gray-900 mb-3">Resume</h4>
                <Link 
                  href="/yiheng_resume.pdf" 
                  target="_blank"
                  className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </Link>
              </div>
            </div>
          </div>
        )
      },
      experience: {
        title: 'Professional Experience',
        content: (
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h4 className="text-xl font-medium text-gray-900 mb-3">ST Engineering Electronics Ltd.</h4>
            <p className="text-gray-600 text-sm mb-4">March 2019 – August 2019</p>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-800">Conducted diagnostic testing of MDT (Mobile Data Terminals) post-repair, ensuring quality standards were maintained</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-800">Performed QA testing for Interior Passenger Information Display System in Buses, contributing to public transportation technology</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-800">Analysed data to track repair success rates and identify fault trends, applying systematic approaches to problem identification</p>
              </div>
            </div>
          </div>
        )
      },
      interests: {
        title: 'Personal Interests',
        content: (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                <h4 className="font-medium text-gray-900 mb-2">Gaming</h4>
                <p className="text-gray-700 text-sm">Passionate about JRPGs, card games, and roguelikes.</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                <h4 className="font-medium text-gray-900 mb-2">Photography</h4>
                <p className="text-gray-700 text-sm">Capturing moments and perspectives in my daily life.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                <h4 className="font-medium text-gray-900 mb-2">Badminton & Bowling</h4>
                <p className="text-gray-700 text-sm">Active pursuits that keep me physically engaged and provide opportunities for mental growth.</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                <h4 className="font-medium text-gray-900 mb-2">Learning Japanese</h4>
                <p className="text-gray-700 text-sm">Currently expanding my linguistic abilities to broaden my cultral understanding.</p>
              </div>
            </div>
          </div>
        )
      },
      photography: {
        title: 'Photography Portfolio',
        content: (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <p className="text-gray-700 max-w-2xl mx-auto">
                A collection of moments captured through my lens.
              </p>
            </div>
            {/* Photo Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Define individual photo data */}
              {[
                {
                  id: 1,
                  src: "/img/portfolio/1.jpg",
                  title: "Night Waterfall",
                  details: "Nikon Z5 • f/11 • 50mm"
                },
                {
                  id: 2,
                  src: "/img/portfolio/2.jpg",
                  title: "White Cat Whiskers",
                  details: "Nikon Z5 • f/4 • 50mm"
                },
                {
                  id: 3,
                  src: "/img/portfolio/3.jpg",
                  title: "Onomichi Skyline",
                  details: "Nikon Z5 • f/16 • 100mm"
                },
                {
                  id: 4,
                  src: "/img/portfolio/4.jpg",
                  title: "Amanohashidate Post Box",
                  details: "S22 Ultra"
                },
                {
                  id: 5,
                  src: "/img/portfolio/5.jpg",
                  title: "Kure Central Pier Terminal",
                  details: "Nikon Z5 • f/8 • 50mm"
                },
                {
                  id: 6,
                  src: "/img/portfolio/6.jpg",
                  title: "Shimonoseki Playground",
                  details: "Nikon Z5 • f/2 • 50mm"
                }
              ].map((photo) => (
                <div key={photo.id} className="group relative bg-gray-100 rounded-lg overflow-hidden shadow-sm border border-gray-200 aspect-square">
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    quality={75}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Liquid glass overlay with blur effect */}
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                    <div className="w-full bg-black/40 backdrop-blur-md border-t border-white/30 shadow-lg py-3 px-4">
                      <div className="text-white text-sm drop-shadow-lg">
                        <p className="font-semibold text-shadow">{photo.title}</p>
                        <p className="text-xs opacity-90 text-shadow">{photo.details}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      },
      philosophy: {
        title: 'Work Philosophy',
        content: (
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-lg border border-gray-200">
            <div className="text-center mb-6">
              <h4 className="text-xl font-medium text-gray-900 mb-3">Modular & Systematic Approach</h4>
            </div>
            <div className="space-y-4 text-gray-800">
              <p>I believe in approaching projects with a structured, modular mindset. Breaking complex challenges into manageable components allows for better understanding, cleaner solutions, and more reliable outcomes.</p>
              <p>My approach typically involves:</p>
              <div className="bg-white p-4 rounded border border-gray-200 ml-4">
                <ul className="space-y-2 text-sm">
                  <li>Creating comprehensive checklists for project phases</li>
                  <li>Developing modular solutions that can be tested independently</li>
                  <li>Maintaining systematic documentation throughout the process</li>
                  <li>Regular review and iteration based on results</li>
                </ul>
              </div>
            </div>
          </div>
        )
      }
    };

    // Page render starts here
    return (
      <div>
          <Navbar/>
            <section className="px-8 pt-30 mx-auto min-h-screen">
              <div className="max-w-5xl mx-auto">
                {/* Main content*/}
                <div className="bg-white rounded-2xl shadow-2xl border-2 border-gray-200 overflow-hidden">
                  {/* Decorative top border */}
                  <div className="h-2 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600"></div>

                  {/* Section Navigation */}
                  <div className="border-b border-gray-200">
                    <div className="px-6">
                      <nav className="flex space-x-8 overflow-x-auto justify-center">
                        {Object.entries(sections).map(([key, section]) => (
                          <button
                            key={key}
                            onClick={() => setActiveSection(key as SectionKey)}
                            className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors duration-200 ${
                              activeSection === key
                                ? 'border-gray-700 text-gray-900'
                                : 'border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-300'
                            }`}
                          >
                            {section.title}
                          </button>
                        ))}
                      </nav>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-12 pb-12 pt-6">
                    <div className="relative">
                      {/* corner elements */}
                      <div className="absolute top-0 left-0 w-8 h-8 border-l-4 border-t-4 border-gray-600 rounded-tl-lg"></div>
                      <div className="absolute top-0 right-0 w-8 h-8 border-r-4 border-t-4 border-gray-600 rounded-tr-lg"></div>
                      <div className="absolute bottom-0 left-0 w-8 h-8 border-l-4 border-b-4 border-gray-600 rounded-bl-lg"></div>
                      <div className="absolute bottom-0 right-0 w-8 h-8 border-r-4 border-b-4 border-gray-600 rounded-br-lg"></div>
                    
                      <div className="px-8 pt-1 pb-6">
                        <h3 className="text-2xl font-light text-gray-900 mb-8 pb-5 border-b border-gray-200 font-serif text-center">
                          {sections[activeSection].title}
                        </h3>
                        {sections[activeSection].content}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            <Contact/>
            </section>
      </div>
    );
  }