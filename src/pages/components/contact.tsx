import Image from 'next/image';


export default function Contact() {
  return (
      <div className="max-w-5xl pt-12 mx-auto">
        {/* heading */}


        {/* Main contact card*/}
        <div className="bg-white rounded-2xl shadow-2xl border-2 border-gray-200 overflow-hidden">
          {/* Decorative top border */}
          <div className="h-2 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600"></div>
          
          <div className="p-12 text-center relative">
            {/* corner decorations */}
            <div className="absolute top-6 left-6 w-8 h-8 border-l-4 border-t-4 border-gray-400 rounded-tl-lg"></div>
            <div className="absolute top-6 right-6 w-8 h-8 border-r-4 border-t-4 border-gray-400 rounded-tr-lg"></div>
            <div className="absolute bottom-6 left-6 w-8 h-8 border-l-4 border-b-4 border-gray-400 rounded-bl-lg"></div>
            <div className="absolute bottom-6 right-6 w-8 h-8 border-r-4 border-b-4 border-gray-400 rounded-br-lg"></div>

            {/* Welcome message*/}
            <div className="mb-12">
              <p className="text-2xl text-gray-800 font-serif leading-relaxed relative">
                Feel free to reach out for collaborations, questions, or just to say hi!
              </p>
            </div>

            {/* Contact icons */}
            <div className="flex justify-center items-center space-x-12">
              {/* Email */}
              <a
                href="mailto:yiheng29@gmail.com"
                className="group relative transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gray-50 rounded-2xl shadow-lg group-hover:shadow-2xl border-2 border-gray-200 group-hover:border-gray-400 flex items-center justify-center transition-all duration-300">
                  <Image
                    src="/img/icons/gmail.png"
                    alt="gmail logo"
                    width={40}
                    height={40}
                    className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                    Email
                  </span>
                </div>
              </a>

              {/* Linkedin */}
              <a
                href="https://www.linkedin.com/in/yiheng-goh"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gray-50 rounded-2xl shadow-lg group-hover:shadow-2xl border-2 border-gray-200 group-hover:border-gray-400 flex items-center justify-center transition-all duration-300">
                  <Image
                    src="/img/icons/linkedin.png"
                    alt="linkedin logo"
                      width={40}
                      height={40}
                    className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                    LinkedIn
                  </span>
                </div>
              </a>

              {/* Github */}
              <a
                href="https://github.com/gohyiheng"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gray-50 rounded-2xl shadow-lg group-hover:shadow-2xl border-2 border-gray-200 group-hover:border-gray-400 flex items-center justify-center transition-all duration-300">
                  <Image
                    src="/img/icons/github.png"
                    alt="github logo"
                    width={40}
                    height={40}
                    className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                    GitHub
                  </span>
                </div>
              </a>
            </div>

            {/* Traditional Japanese-style bottom decoration */}
            <div className="mt-16 flex justify-center">
              <div className="flex space-x-3">
                <div className="w-4 h-4 bg-gradient-to-br from-gray-600 to-gray-700 rotate-45"></div>
                <div className="w-4 h-4 bg-gradient-to-br from-gray-500 to-gray-600 rotate-45"></div>
                <div className="w-4 h-4 bg-gradient-to-br from-gray-600 to-gray-700 rotate-45"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Traditional closing element */}
        <div className="text-center mt-12">
          <p className="text-gray-700 font-serif text-lg">
            ありがとうございます
          </p>
        </div>
      </div>
  );
}