const About = () => {
  const keywords = [
    'Python',
    'Java',
    'HTML/CSS/JS',
    'WAN/LAN Infrastructure',
    'Linux'
  ];

  return (
    <section className="px-8 py-16 mx-auto bg-gradient-to-b from-gray-50 to-neutral-50 min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto">
        {/* heading */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-800 mb-4 font-serif tracking-wider">
            About
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-gray-700 mx-auto rounded-full"></div>
        </div>

        {/* Main content*/}
        <div className="bg-white rounded-2xl shadow-2xl border-2 border-gray-200 overflow-hidden">
          {/* top border */}
          <div className="h-2 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600"></div>
          
          <div className="p-12">
            <div className="relative">
              {/* corner elements */}
              <div className="absolute top-0 left-0 w-8 h-8 border-l-4 border-t-4 border-gray-600 rounded-tl-lg"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-r-4 border-t-4 border-gray-600 rounded-tr-lg"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-l-4 border-b-4 border-gray-600 rounded-bl-lg"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r-4 border-b-4 border-gray-600 rounded-br-lg"></div>
              
              <div className="px-8 py-6">
                <p className="text-xl text-gray-800 leading-relaxed font-serif text-center mb-8 relative">
                  I'm a builder and problem-solver who enjoys creating solutions through technology. 
                  I have hands-on experience with both frontend and backend technologies, and I like 
                  working on things that make an impact. Whether it's coding, infrastructure, or 
                  collaborating in teams, I'm always eager to learn and contribute.
                </p>
              </div>
            </div>

            {/* Skills section */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-800 text-center mb-8 font-serif">
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {keywords.map((word, index) => (
                  <span
                    key={word}
                    className="group relative bg-gray-50 text-gray-800 px-6 py-3 rounded-full font-medium text-sm shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-gray-400 transform hover:-translate-y-1"
                  >
                    <span className="relative z-10">{word}</span>
                    <div className="absolute inset-0 bg-gray-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </span>
                ))}
              </div>
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
    </section>
  );
};

export default About;