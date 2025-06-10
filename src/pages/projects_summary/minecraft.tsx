export default function MinecraftVillageGenerator() {
    return (
    <div className="mx-auto p-8 space-y-8 bg-gradient-to-br from-gray-50 to-neutral-50">
        <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
                Minecraft Village Generator
            </h2>
            <p className="text-lg text-gray-600">Procedural village generation using Minecraft Python API</p>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 mb-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">What It Does</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
            A sophisticated procedural generation system that creates villages in Minecraft worlds. 
            The generator uses advanced algorithms to build randomized houses with multiple rooms, establish 
            road networks, and populate villages with decorative elements for an 
            immersive experience.
            </p>
        
            <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                    <div className="flex items-center mb-2">
                        <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
                        <h4 className="font-medium text-gray-800">Procedural Houses</h4>
                    </div>
                <p className="text-sm text-gray-600">Randomized multi-story houses with recursive room subdivision algorithms</p>
                </div>
            
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                    <div className="flex items-center mb-2">
                        <div className="w-2 h-2 bg-gray-700 rounded-full mr-3"></div>
                        <h4 className="font-medium text-gray-800">Smart Road Networks</h4>
                    </div>
                <p className="text-sm text-gray-600">Realistic road systems connecting houses with dynamic layout generation</p>
                </div>
            
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                    <div className="flex items-center mb-2">
                        <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
                        <h4 className="font-medium text-gray-800">Rich Decorations</h4>
                    </div>
                    <p className="text-sm text-gray-600">Gardens, streetlamps, fountains, and furniture for authentic village atmosphere</p>
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
                            <p className="font-medium text-gray-800">Recursive Architecture</p>
                            <p className="text-sm text-gray-600">Implemented recursive subdivision algorithms for dynamic room generation</p>
                        </div>
                    </div>
                
                    <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-gray-700 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-bold">2</span>
                        </div>
                        <div>
                            <p className="font-medium text-gray-800">Modular Design</p>
                            <p className="text-sm text-gray-600">Clean code architecture with separated concerns and team collaboration support</p>
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
                            <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">Python</span>
                        </div>
                    </div>
                
                    <div>
                        <p className="text-sm font-medium text-gray-600 mb-2">Core Technologies</p>
                        <div className="flex flex-wrap gap-2">
                            <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">Minecraft python API</span>
                            <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">MCPI library</span>
                        </div>
                    </div>
                    
                    <div>
                        <p className="text-sm font-medium text-gray-600 mb-2">Algorithms & Patterns</p>
                        <div className="flex flex-wrap gap-2">
                            <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">Recursive Subdivision</span>
                            <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">Procedural Generation</span>
                            <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">Pathfinding</span>
                        </div>
                    </div>

                    <div>
                        <p className="text-sm font-medium text-gray-600 mb-2">Development Practices</p>
                        <div className="flex flex-wrap gap-2">
                            <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">Modular Architecture</span>
                            <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">Team Collaboration</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <section className="bg-white/80 backdrop-blur-sm rounded-xl p-6 mb-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Features</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
                Dynamic village generation with intelligent algorithms that create unique, realistic 
                settlements perfectly integrated into Minecraft&#39;s natural world.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-800 mb-2">Smart House Generation</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Randomized dimensions and materials</li>
                        <li>• Multi-story buildings with floors</li>
                        <li>• Recursive room subdivision</li>
                        <li>• Windows, doors, and roofing</li>
                    </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-800 mb-2">Village Infrastructure</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Minimum 5+ connected houses</li>
                        <li>• Realistic road networks</li>
                        <li>• Dynamic layout generation</li>
                        <li>• Door-to-door connectivity</li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="bg-white/80 backdrop-blur-sm rounded-xl p-6 mb-8 shadow-sm text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">For more information</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
                Watch the full demo showcasing data visualization, user interactions, and progress tracking features, view the source code or view more information about the project.
            </p>
            <a
                href="https://www.youtube.com/watch?v=raSy0x0HETk"
                target="_blank"
                rel="noopener noreferrer"
                className="block items-center bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-300 hover:text-gray-800 transition-colors font-medium mb-4"
            >
                Watch Demo →
            </a>
            <a
                href="https://drive.google.com/file/d/1kmUzmaVhK5Ifna0Uw_fqj-_BH6J9Y8je/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="block items-center bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-300 hover:text-gray-800 transition-colors font-medium mb-4"
            >
                View more information about the project →
            </a>
            <a
                href="https://github.com/athul-tmp/Minecraft-Village-Generator"
                target="_blank"
                rel="noopener noreferrer"
                className="block items-center bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-300 hover:text-gray-800 transition-colors font-medium"
            >
                View source code →
            </a>
        </section>

    </div>
    );
}