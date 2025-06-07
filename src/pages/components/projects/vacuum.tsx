export default function VacuumGame() {
  return (
    <div className="mx-auto p-8 space-y-8 bg-gradient-to-br from-gray-50 to-neutral-50">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">
          Vacuum Cleaning Game
        </h2>
        <p className="text-lg text-gray-600">Interactive console game built with C++</p>
      </div>
      
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 mb-8 shadow-sm">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">What It Does</h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          A console-based game where players control a vacuum cleaner navigating through a 2D room with boundaries 
          and obstacles. Players use directional commands to move the vacuum cleaner around a 10x10 grid, 
          avoiding blocks and staying within room boundaries while collecting points for successful moves.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
            <div className="flex items-center mb-2">
              <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
              <h4 className="font-medium text-gray-800">Command System</h4>
            </div>
            <p className="text-sm text-gray-600">Navigate using load, init, forward, turn_left, and turn_right commands</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
            <div className="flex items-center mb-2">
              <div className="w-2 h-2 bg-gray-700 rounded-full mr-3"></div>
              <h4 className="font-medium text-gray-800">Dynamic Gameplay</h4>
            </div>
            <p className="text-sm text-gray-600">Multiple game boards with obstacles and boundary collision detection</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
            <div className="flex items-center mb-2">
              <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
              <h4 className="font-medium text-gray-800">Memory Management</h4>
            </div>
            <p className="text-sm text-gray-600">Dynamic arrays and pointers for efficient board representation</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
            <div className="flex items-center mb-2">
              <div className="w-2 h-2 bg-gray-700 rounded-full mr-3"></div>
              <h4 className="font-medium text-gray-800">Input Validation</h4>
            </div>
            <p className="text-sm text-gray-600">Comprehensive error handling and user input validation system</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">How Was It Built</h3>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 space-y-3 shadow-sm">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-gray-700 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold">1</span>
              </div>
              <div>
                <p className="font-medium text-gray-800">Object-Oriented Design</p>
                <p className="text-sm text-gray-600">Implemented using predefined classes with C++11/14 features</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-gray-700 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold">2</span>
              </div>
              <div>
                <p className="font-medium text-gray-800">Dynamic Memory Management</p>
                <p className="text-sm text-gray-600">Efficient use of pointers, arrays, and vectors for game state</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-gray-700 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold">3</span>
              </div>
              <div>
                <p className="font-medium text-gray-800">Game Logic Implementation</p>
                <p className="text-sm text-gray-600">Menu system, board rendering, and collision detection algorithms</p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">Tech Stack</h3>
          <div className="space-y-3">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-2">Programming Language</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">C++</span>
              </div>
            </div>
            
            <div>
              <p className="text-sm font-medium text-gray-600 mb-2">Data Structures</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">Arrays</span>
                <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">Vectors</span>
                <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">Pointers</span>
              </div>
            </div>
            
            <div>
              <p className="text-sm font-medium text-gray-600 mb-2">Development Tools</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">Console Application</span>
                <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">OOP Design</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="bg-white/80 backdrop-blur-sm rounded-xl p-6 mb-8 shadow-sm">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Game Features</h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          Experience strategic gameplay with multiple commands, obstacle avoidance, and dynamic board configurations 
          that challenge your navigation skills.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-800 mb-2">Core Commands</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• <span className="font-mono bg-gray-200 px-1 rounded">load &lt;board&gt;</span> - Load game board</li>
              <li>• <span className="font-mono bg-gray-200 px-1 rounded">init &lt;x,y,dir&gt;</span> - Set starting position</li>
              <li>• <span className="font-mono bg-gray-200 px-1 rounded">forward</span> - Move ahead</li>
              <li>• <span className="font-mono bg-gray-200 px-1 rounded">turn_left/right</span> - Change direction</li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-800 mb-2">Game Mechanics</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 10x10 grid with boundary detection</li>
              <li>• Obstacle collision prevention</li>
              <li>• Move counter and scoring system</li>
              <li>• Multiple predefined game boards</li>
            </ul>
          </div>
        </div>
      </section>
            <section className="bg-white/80 backdrop-blur-sm rounded-xl p-6 mb-8 shadow-sm">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">See It in Action</h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          Watch the demo of the vacuum cleaner game here.
        </p>
        <a
          href="https://drive.google.com/file/d/1v9nMCXE8HfmYHO5BDky8mZ8Tvb6RySVh/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors font-medium"
        >
          Watch Demo →
        </a>
      </section>
    </div>
  );
}