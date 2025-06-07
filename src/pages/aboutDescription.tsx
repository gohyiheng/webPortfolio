import { useState } from 'react';
import Navbar from './components/navbar';
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
              <p className="text-gray-700 text-sm">Passionate about JRPGs, card games, and roguelikes. I appreciate the strategic thinking and systematic progression these genres offer.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="font-medium text-gray-900 mb-2">Photography</h4>
              <p className="text-gray-700 text-sm">Capturing moments and perspectives, with an eye for composition and detail.</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="font-medium text-gray-900 mb-2">Badminton & Bowling</h4>
              <p className="text-gray-700 text-sm">Active pursuits that keep me physically engaged and provide opportunities for strategic thinking.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="font-medium text-gray-900 mb-2">Learning Japanese</h4>
              <p className="text-gray-700 text-sm">Currently expanding my linguistic abilities, embracing the challenge of mastering a new language and culture.</p>
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
            {/* Photo Card Template - You can replace these with your actual photos */}
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="group relative bg-gray-100 rounded-lg overflow-hidden shadow-sm border border-gray-200 aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="text-3xl mb-2"></div>
                    <p className="text-sm">Photo {index}</p>
                  </div>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-end p-4 opacity-0 group-hover:opacity-100">
                  <div className="text-white text-sm">
                    <p className="font-medium">Sample Photo Title</p>
                    <p className="text-xs opacity-90">Camera Settings • Location</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Photo Upload Instructions */}
          {/* <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-center">
            <div className="text-2xl mb-3">📷</div>
            <h4 className="font-medium text-gray-900 mb-2">Add Your Photography</h4>
            <p className="text-gray-600 text-sm mb-4">
              Replace the placeholder images above with your actual photographs. You can add image URLs or upload files to showcase your work.
            </p>
            <div className="text-xs text-gray-500 space-y-1">
              <p>• Recommended size: 800x800px or larger</p>
              <p>• Supported formats: JPG, PNG, WebP</p>
              <p>• Consider adding captions with camera settings and locations</p>
            </div>
          </div> */}
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
          <section className="px-8 py-16 mx-auto bg-gradient-to-b from-gray-50 to-neutral-50 min-h-screen">
            
            <div className="max-w-5xl pt-6 mx-auto">
              {/* heading */}

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

              {/* Contact*/}
              <div className="mt-12 bg-white rounded-2xl shadow-2xl border-2 border-gray-200 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600"></div>
                <div className="p-8 text-center">
                  <h3 className="text-xl font-medium text-gray-900 mb-4 font-serif">Let&#39;s Connect</h3>
                  <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                    I&#39;m actively seeking opportunities to begin my professional journey. If you&#39;re looking for someone who brings systematic thinking, continuous learning, and fresh perspectives to your team, I&#39;d love to hear from you.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="/aboutProjects" className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 font-medium text-center">
                      View Projects
                    </a>
                    <a href="#contact" className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium text-center">
                      Contact Me
                    </a>
                  </div>
                </div>
              </div>

              {/* bottom decoration */}
              <div className="mt-12 flex justify-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="fixed bottom-8 right-8 opacity-10 pointer-events-none">
              <div className="text-6xl text-gray-400 font-light">紙</div>
            </div>
          </section>
    </div>

  );
}