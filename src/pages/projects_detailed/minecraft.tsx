import Link from "next/link";
import Contact from "../components/contact";
import Navbar from "../components/navbar";
import Image from "next/image";


export default function VetCare() {
    return (
        <>
        <Navbar />
        <section className="items-center justify-center bg-gradient-to-br from-gray-50 to-neutral-50">
            <div className="max-w-6xl mx-auto px-8 mt-30">
            <div className="text-center space-y-8">
                <div className="space-y-4">
                <h1 className="text-6xl font-light text-gray-800 tracking-tight">
                    Minecraft village generator
                </h1>
                <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
                    Procedural village generation using Minecraft Python API for creating dynamic settlements. 
                </p>
                </div>
                
                {/* Image */}
                <div className="relative max-w-4xl mx-auto mt-12">
                    <div className="relative aspect-video rounded-xl overflow-hidden">
                    <Image
                        src='/img/minecraft/village.png'
                        alt='Minecraft village'
                        fill
                        className="object-cover rounded-2xl transition-transform duration-700 group-hover:scale-[1.02] shadow-lg"
                        sizes="(max-width: 768px) 100vw, 90vw"
                    />
                    </div>
                </div>
            </div>
            </div>
        </section>

        {/* Problem Statement */}
        <section className="py-12 bg-gradient-to-br from-gray-50 to-neutral-50">
            <div className="max-w-4xl mx-auto px-8">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl font-light text-gray-800">The Challenge</h2>
                    <div className="w-24 h-px bg-gray-300 mx-auto"></div>
                        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mt-8">
                            Creating villages in Minecraft is challenging due to it being time consuming by placing a single block at a time, and it being repetitive.
                        </p>
                </div>
            </div>
        </section>

        {/* Solution Overview */}
        <section className="py-12 bg-gradient-to-br from-gray-50 to-neutral-50">
            <div className="max-w-6xl mx-auto px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-light text-gray-800 mb-4">Our Solution</h2>
                    <div className="w-24 h-px bg-gray-300 mx-auto mb-4"></div>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                         The minecraft village generator solves this problem by automating the village building process that generates a village for you.
                    </p>
                </div>

                {/* Feature Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-gray-600 rounded-2xl mx-auto flex items-center justify-center">
                        <div className="w-8 h-8 bg-white rounded"></div>
                        </div>
                        <h3 className="text-lg font-medium text-gray-800">Procedural Houses</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                        Randomized multi-story houses with recursive room subdivision algorithms 
                        </p>
                    </div>

                    <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-gray-700 rounded-2xl mx-auto flex items-center justify-center">
                        <div className="w-8 h-8 bg-white rounded"></div>
                        </div>
                        <h3 className="text-lg font-medium text-gray-800">Smart Road Networks</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                        Realistic road systems connecting houses door-to-door with dynamic layout generation 
                        </p>
                    </div>

                    <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-gray-600 rounded-2xl mx-auto flex items-center justify-center">
                        <div className="w-8 h-8 bg-white rounded"></div>
                        </div>
                        <h3 className="text-lg font-medium text-gray-800">Rich Decorations</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                        Gardens, streetlamps, fountains, and furniture for authentic village atmosphere 
                        </p>
                    </div>

                    <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-gray-700 rounded-2xl mx-auto flex items-center justify-center">
                        <div className="w-8 h-8 bg-white rounded"></div>
                        </div>
                        <h3 className="text-lg font-medium text-gray-800">Village Infrastructure</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                        Minimum 5+ connected houses with door-to-door connectivity 
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Product section */}
        <section className="py-12 bg-gradient-to-br from-gray-50 to-neutral-50">
            <div className="max-w-6xl mx-auto px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-light text-gray-800 mb-4">System Features</h2>
                    <div className="w-24 h-px bg-gray-300 mx-auto"></div>
                </div>

                <div className="space-y-24">
                    {/* Feature 1 -Recursion */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-light text-gray-800">
                            Smart House Generation 
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                            By using recursive subdivision algorithms to create unique multi-story houses with randomized dimensions and materials. Each house features dynamic room layouts, proper windows and doors, and realistic roofing systems.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-3"></div>
                                    Randomized dimensions and materials for variety 
                                </li>
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-3"></div>
                                    Multi-story buildings with recursive room subdivision 
                                </li>
                            </ul>
                        </div>
                        <div className="relative bg-gray-100 rounded-2xl aspect-video overflow-hidden flex items-center justify-center">
                            <Image
                                src='/img/minecraft/house.png'
                                alt='Minecraft recursive hosue layout'
                                fill
                                className="object-cover rounded-2xl transition-transform duration-700 group-hover:scale-[1.02] shadow-lg"
                                sizes="(max-width: 768px) 100vw, 90vw"
                            />
                        </div>
                    </div>

                    {/* Feature 2 - Village infra */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative bg-gray-100 rounded-2xl aspect-video overflow-hidden lg:order-1 flex items-center justify-center">
                            <div className="text-gray-400 text-center">
                            <Image
                                src='/img/cover/minecraft_cover.png'
                                alt='Minecraft exterior house'
                                fill
                                className="object-cover rounded-2xl transition-transform duration-700 group-hover:scale-[1.02] shadow-lg"
                                sizes="(max-width: 768px) 100vw, 90vw"
                            />
                            </div>
                        </div>
                        <div className="space-y-4 lg:order-2">
                            <h3 className="text-2xl font-light text-gray-800">
                            Dynamic Village Infrastructure
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                            Intelligent pathfinding algorithms create realistic road networks that connect all houses with door-to-door accessibility. The system generates villages with minimum 5+ connected houses, complete with decorative elements like gardens, streetlamps, and fountains for an immersive experience. 
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-gray-700 rounded-full mr-3"></div>
                                    Realistic road networks with dynamic layout generation 
                                </li>
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-gray-700 rounded-full mr-3"></div>
                                    Rich decorations and village atmosphere elements
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section className="py-12 bg-gradient-to-br from-gray-50 to-neutral-50">
            <div className="max-w-6xl mx-auto px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-light text-gray-800 mb-4">Development Approach & Technologies</h2>
                    <div className="w-24 h-px bg-gray-300 mx-auto mb-4"></div>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                    Built with python using Minecraft Python API and the MCPI Library to allow for generation of the village
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Tech Stack */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-light text-gray-800">Technology Stack</h3>
                        
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm font-medium text-gray-600 mb-3">Programming Language</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-gray-600 text-white px-4 py-2 rounded-full text-sm font-light">Python</span>
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-600 mb-3">Core Technologies</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-gray-600 text-white px-4 py-2 rounded-full text-sm font-light">Minecraft Python API</span>
                                    <span className="bg-gray-600 text-white px-4 py-2 rounded-full text-sm font-light">MCPI Library</span>
                                    <span className="bg-gray-600 text-white px-4 py-2 rounded-full text-sm font-light">Recursive Subdivision</span>
                                    <span className="bg-gray-600 text-white px-4 py-2 rounded-full text-sm font-light">Procedural Generation</span>
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-600 mb-3">Development Practices</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-gray-600 text-white px-4 py-2 rounded-full text-sm font-light">Github</span>
                                    <span className="bg-gray-600 text-white px-4 py-2 rounded-full text-sm font-light">Modular Architecture</span>
                                </div>
                            </div> 
                        </div>
                    </div>

                    {/* Development Insights */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-light text-gray-800">Development Insights</h3>
                        <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
                            <div className="space-y-3">
                            <h4 className="font-medium text-gray-800">Key Achievements</h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                Implemented recursive subdivision algorithms for room generation
                                </li>
                                <li className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                Created intelligent pathfinding for realistic road networks 
                                </li>
                                <li className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                Delivered a fully functional procedural village generation system
                                </li>
                            </ul>
                            </div>
                            
                            <div className="space-y-3">
                            <h4 className="font-medium text-gray-800">Technical Challenges</h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                Where would we stop the recursion so that rooms generation would not be too small.
                                </li>
                                <li className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                Pathfinding algorithm.
                                </li>
                                <li className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                Terraforming algorithm.
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Resources & Demo */}
        <section className="py-12 bg-gradient-to-br from-gray-50 to-neutral-50">
            <div className="max-w-4xl mx-auto px-8 text-center">
                <h2 className="text-4xl font-light text-gray-800 mb-4">Explore the Minecraft Vilage Generator</h2>
                <div className="w-24 h-px bg-gray-300 mx-auto mb-4"></div>
                
                <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                    <Link
                    href="https://www.youtube.com/watch?v=raSy0x0HETk"
                    target="_blank"
                    className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover:bg-white transition-all duration-300 border border-white/50"
                    >
                    <div className="space-y-4">
                        <div className="w-12 h-12 mx-auto">
                            <Image 
                                src="/img/icons/youtube.png" 
                                alt="Project video" 
                                width={48}
                                height={48}
                                className="w-full h-full rounded-2xl object-contain group-hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                        <h3 className="text-lg font-medium text-gray-800">Watch Demo</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                        Full walkthrough showcasing features, user interactions, and system capabilities
                        </p>
                    </div>
                    </Link>
                    <Link
                    href="https://www.youtube.com/watch?v=raSy0x0HETk"
                    target="_blank"
                    className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover:bg-white transition-all duration-300 border border-white/50"
                    >
                    <div className="space-y-4">
                        <div className="w-12 h-12 mx-auto">
                            <Image 
                                src="/img/icons/github.png" 
                                alt="Project video" 
                                width={48}
                                height={48}
                                className="w-full h-full rounded-2xl object-contain group-hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                        <h3 className="text-lg font-medium text-gray-800">View the source code</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                        Try it yourself with the source code.
                        </p>
                    </div>
                    </Link>
                </div>
            </div>
        </section>

        <Contact />
        </>
    );
    }