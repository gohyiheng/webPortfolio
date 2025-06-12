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
                    Closing the Gap
                </h1>
                <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
                    Progress tracking web application for Australia's National Agreement on Closing the Gap with interactive data visualizations.
                </p>
                </div>
                
                {/* Image */}
                <div className="relative max-w-4xl mx-auto mt-12">
                    <div className="relative aspect-video rounded-xl overflow-hidden">
                    <Image
                        src='/img/ctg/landing.png'
                        alt='Closing the Gap dashboard'
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
                            Tracking progress toward Australia's National Agreement on Closing the Gap requires accessible data visualization tools that help government officials, Indigenous leaders, and the public understand key outcomes and progress over time.
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
                         A comprehensive full-stack web application that provides interactive data visualizations and insights to track progress across health, education, and economic indicators.
                    </p>
                </div>

                {/* Feature Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-gray-600 rounded-2xl mx-auto flex items-center justify-center">
                        <div className="w-8 h-8 bg-white rounded"></div>
                        </div>
                        <h3 className="text-lg font-medium text-gray-800">Data Visualization</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                        Interactive charts comparing 2016-2021 census data with dynamic filtering and analysis
                        </p>
                    </div>

                    <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-gray-700 rounded-2xl mx-auto flex items-center justify-center">
                        <div className="w-8 h-8 bg-white rounded"></div>
                        </div>
                        <h3 className="text-lg font-medium text-gray-800">Outcome Tracking</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                        Monitor progress across key health, education, and economic indicators with trend analysis
                        </p>
                    </div>

                    <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-gray-600 rounded-2xl mx-auto flex items-center justify-center">
                        <div className="w-8 h-8 bg-white rounded"></div>
                        </div>
                        <h3 className="text-lg font-medium text-gray-800">Database Integration</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                        Normalized SQLite database with efficient data management and JDBC connectivity
                        </p>
                    </div>

                    <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-gray-700 rounded-2xl mx-auto flex items-center justify-center">
                        <div className="w-8 h-8 bg-white rounded"></div>
                        </div>
                        <h3 className="text-lg font-medium text-gray-800">User Testing</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                        Comprehensive testing framework with user personas and scenario-based validation
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
                    {/* Feature 1 - Data Visualization */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-light text-gray-800">
                            Interactive Data Visualization 
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                            Custom UX/UI design with comprehensive data visualization tools that transform complex census data into meaningful insights. Features dynamic charts, filtering capabilities, and comparative analysis tools for understanding progress trends across different demographics and regions.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-3"></div>
                                    Interactive charts with 2016-2021 census data comparison
                                </li>
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-3"></div>
                                    Dynamic filtering and trend analysis capabilities
                                </li>
                            </ul>
                        </div>
                        <div className="relative bg-gray-100 rounded-2xl aspect-video overflow-hidden flex items-center justify-center">
                            <Image
                                src='/img/ctg/outcome_info.png'
                                alt='Data visualization dashboard'
                                fill
                                className="object-cover rounded-2xl transition-transform duration-700 group-hover:scale-[1.02] shadow-lg"
                                sizes="(max-width: 768px) 100vw, 90vw"
                            />
                        </div>
                    </div>

                    {/* Feature 2 - Database Architecture */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative bg-gray-100 rounded-2xl aspect-video overflow-hidden lg:order-1 flex items-center justify-center">
                            <div className="text-gray-400 text-center">
                            <Image
                                src='/img/ctg/db.png'
                                alt='Database architecture diagram'
                                fill
                                className="object-cover rounded-2xl transition-transform duration-700 group-hover:scale-[1.02] shadow-lg"
                                sizes="(max-width: 768px) 100vw, 90vw"
                            />
                            </div>
                        </div>
                        <div className="space-y-4 lg:order-2">
                            <h3 className="text-2xl font-light text-gray-800">
                            Database strcutre
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                            Built on a normalized database model (3NF) using SQLite with JDBC connectivity for efficient data management. The system handles complex census data relationships by using views while maintaining optimal performance for real-time queries and analysis across multiple demographic and geographic dimensions.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-gray-700 rounded-full mr-3"></div>
                                    Normalized SQLite database with 3NF compliance
                                </li>
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-gray-700 rounded-full mr-3"></div>
                                    Efficient JDBC integration for real-time data access
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
                    Built with Java and Javalin framework, featuring comprehensive backend integration with SQLite database and user-centered design principles
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Tech Stack */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-light text-gray-800">Technology Stack</h3>
                        
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm font-medium text-gray-600 mb-3">Backend & Framework</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-gray-600 text-white px-4 py-2 rounded-full text-sm font-light">Java</span>
                                    <span className="bg-gray-600 text-white px-4 py-2 rounded-full text-sm font-light">Javalin</span>
                                    <span className="bg-gray-600 text-white px-4 py-2 rounded-full text-sm font-light">JDBC</span>
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-600 mb-3">Database & Frontend</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-gray-600 text-white px-4 py-2 rounded-full text-sm font-light">SQLite</span>
                                    <span className="bg-gray-600 text-white px-4 py-2 rounded-full text-sm font-light">HTML</span>
                                    <span className="bg-gray-600 text-white px-4 py-2 rounded-full text-sm font-light">CSS</span>
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-600 mb-3">Development Practices</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-gray-600 text-white px-4 py-2 rounded-full text-sm font-light">GitHub</span>
                                    <span className="bg-gray-600 text-white px-4 py-2 rounded-full text-sm font-light">Git</span>
                                    <span className="bg-gray-600 text-white px-4 py-2 rounded-full text-sm font-light">User-Centered Design</span>
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
                                Developed full-stack web application with custom UX/UI design
                                </li>
                                <li className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                Implemented normalized database architecture (3NF) with SQLite
                                </li>
                                <li className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                Conducted comprehensive user testing with personas and scenarios
                                </li>
                            </ul>
                            </div>
                            
                            <div className="space-y-3">
                            <h4 className="font-medium text-gray-800">Technical Challenges</h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                Complex census data normalization and relationship mapping
                                </li>
                                <li className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                Data visualization with multiple large datasets
                                </li>
                                <li className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                User experience design for complex data relationships
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
                <h2 className="text-4xl font-light text-gray-800 mb-4">Explore the Closing the Gap Project</h2>
                <div className="w-24 h-px bg-gray-300 mx-auto mb-4"></div>
                
                <div className="grid md:grid-cols-1 gap-6 max-w-2xl mx-auto">
                    <Link
                    href="https://drive.google.com/file/d/1kmUzmaVhK5Ifna0Uw_fqj-_BH6J9Y8je/view?usp=drive_link"
                    target="_blank"
                    className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover:bg-white transition-all duration-300 border border-white/50"
                    >
                    <div className="space-y-4">
                        <div className="w-12 h-12 mx-auto">
                            <Image 
                                src="/img/icons/gdrive.png" 
                                alt="Project video" 
                                width={48}
                                height={48}
                                className="w-full h-full rounded-2xl object-contain group-hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                        <h3 className="text-lg font-medium text-gray-800">Watch Demo</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                        Full walkthrough showcasing data visualization, user interactions, and progress tracking features
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