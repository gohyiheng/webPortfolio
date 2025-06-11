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
                    VetCare
                </h1>
                <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
                    A comprehensive web application platform for all your veterinary needs.
                </p>
                </div>
                
                {/* Image */}
                <div className="relative max-w-4xl mx-auto mt-12">
                    <div className="relative aspect-video rounded-xl overflow-hidden">
                    <Image
                        src='/img/vetCare/vetCare_home.png'
                        alt='VetCare landing page'
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
        <section className="py-24 bg-gradient-to-br from-gray-50 to-neutral-50">
            <div className="max-w-4xl mx-auto px-8">
                <div className="text-center space-y-6">
                    <h2 className="text-4xl font-light text-gray-800">The Challenge</h2>
                    <div className="w-24 h-px bg-gray-300 mx-auto"></div>
                        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mt-8">
                            Pet healthcare is often fragmented and inefficient. Many pet owners struggle with:<br />
                            - Scattered or inaccessible medical records<br />
                            - Poor communication between veterinarians and pet owners<br />
                            - Limited visibility into available services or pricing across clinics<br /><br />

                            VetCare addresses these challenges by bringing everything together into a single, user-friendly platform which simplifies care for your pets, improving transparency, and fostering stronger connections between pet owners and veterinarians.
                        </p>
                </div>
            </div>
        </section>

        {/* Solution Overview */}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-neutral-50">
            <div className="max-w-6xl mx-auto px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-light text-gray-800 mb-6">Our Solution</h2>
                    <div className="w-24 h-px bg-gray-300 mx-auto mb-8"></div>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        A unified platform that bridges the gap between pet owners and veterinary professionals, 
                        creating seamless experiences for better pet health outcomes.
                    </p>
                </div>

                {/* Feature Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-gray-600 rounded-2xl mx-auto flex items-center justify-center">
                        <div className="w-8 h-8 bg-white rounded"></div>
                        </div>
                        <h3 className="text-lg font-medium text-gray-800">Smart Scheduling</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                        Intelligent appointment booking with real-time availability and automated reminders
                        </p>
                    </div>

                    <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-gray-700 rounded-2xl mx-auto flex items-center justify-center">
                        <div className="w-8 h-8 bg-white rounded"></div>
                        </div>
                        <h3 className="text-lg font-medium text-gray-800">Digital Records</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                        Comprehensive medical history management with secure cloud storage
                        </p>
                    </div>

                    <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-gray-600 rounded-2xl mx-auto flex items-center justify-center">
                        <div className="w-8 h-8 bg-white rounded"></div>
                        </div>
                        <h3 className="text-lg font-medium text-gray-800">Telemedicine</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                        Virtual consultations and remote monitoring for continuous care
                        </p>
                    </div>

                    <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-gray-700 rounded-2xl mx-auto flex items-center justify-center">
                        <div className="w-8 h-8 bg-white rounded"></div>
                        </div>
                        <h3 className="text-lg font-medium text-gray-800">Care Analytics</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                        Health insights and preventive care recommendations powered by data
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Product section */}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-neutral-50">
            <div className="max-w-6xl mx-auto px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-light text-gray-800 mb-6">Product Experience</h2>
                    <div className="w-24 h-px bg-gray-300 mx-auto"></div>
                </div>

                <div className="space-y-24">
                    {/* Feature 1 - Booking System */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-light text-gray-800">
                            Streamlined Appointment Management
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                            Our intelligent booking system allows pet owners to easily schedule appointments with real-time availability checking. 
                            Pet owners can view, modify, or cancel their appointments through an intuitive interface that connects seamlessly with the veterinary practice's scheduling system.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-3"></div>
                                    Real-time appointment availability and booking
                                </li>
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-3"></div>
                                    Flexible cancellation and rescheduling options
                                </li>
                            </ul>
                        </div>
                        <div className="relative bg-gray-100 rounded-2xl aspect-video overflow-hidden flex items-center justify-center">
                            <Image
                                src='/img/vetCare/vetCare_dashboard.png'
                                alt='VetCare landing page'
                                fill
                                className="object-cover rounded-2xl transition-transform duration-700 group-hover:scale-[1.02] shadow-lg"
                                sizes="(max-width: 768px) 100vw, 90vw"
                            />
                        </div>
                    </div>

                    {/* Feature 2 - Medical Records */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative bg-gray-100 rounded-2xl aspect-video overflow-hidden lg:order-1 flex items-center justify-center">
                            <div className="text-gray-400 text-center">
                            <Image
                                src='/img/vetCare/vetCare_medical_records.png'
                                alt='VetCare landing page'
                                fill
                                className="object-cover rounded-2xl transition-transform duration-700 group-hover:scale-[1.02] shadow-lg"
                                sizes="(max-width: 768px) 100vw, 90vw"
                            />
                            </div>
                        </div>
                        <div className="space-y-6 lg:order-2">
                            <h3 className="text-2xl font-light text-gray-800">
                            Comprehensive Health Records
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                            Our digital medical records system provides secure, centralized storage of pet health information with precise 
                            querying capabilities for large datasets. Pet owners can access complete medical histories, download records, 
                            and securely share pet data with multiple veterinary providers. The system includes medication tracking, 
                            vaccination schedules, and educational resources navigation.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-gray-700 rounded-full mr-3"></div>
                                    Downloadable medical records and data sharing
                                </li>
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-gray-700 rounded-full mr-3"></div>
                                    Integrated medication and vaccination tracking
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Development Process */}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-neutral-50">
            <div className="max-w-6xl mx-auto px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-light text-gray-800 mb-6">Development Journey</h2>
                    <div className="w-24 h-px bg-gray-300 mx-auto mb-8"></div>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        A structured 3-sprint Agile development approach focusing on iterative improvement, 
                        team collaboration, and continuous learning throughout the development lifecycle.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Planning Phase - Sprint 0 */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 space-y-6">
                        <div className="w-12 h-12 bg-gray-600 rounded-xl flex items-center justify-center">
                        <   span className="text-white font-light text-lg">0</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-medium text-gray-800 mb-3">Foundation & Planning</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                Established project foundation with comprehensive planning documentation, wireframe creation, 
                                and software requirements definition. Team focused on understanding Agile methodologies and 
                                setting up development infrastructure including GitHub Projects for task management.
                            </p>
                            <div className="space-y-2">
                                <div className="flex items-center text-xs text-gray-500">
                                    <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
                                    Project planning documentation (5 story points)
                                </div>
                                <div className="flex items-center text-xs text-gray-500">
                                    <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
                                    Wireframes and basic website layout (8 story points)
                                </div>
                                <div className="flex items-center text-xs text-gray-500">
                                    <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
                                    Software requirement documentation (8 story points)
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Development Phase - Sprint 1 */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 space-y-6">
                        <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center">
                            <span className="text-white font-light text-lg">1</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-medium text-gray-800 mb-3">Core Development</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                Implemented core functionality including booking and cancellation systems, medical records database schema, 
                                and user interface development. Focus on creating working database with basic layout and automated testing 
                                infrastructure using Maven and Spring Boot.
                            </p>
                            <div className="space-y-2">
                                <div className="flex items-center text-xs text-gray-500">
                                <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
                                Booking and cancellation system implementation
                                </div>
                                <div className="flex items-center text-xs text-gray-500">
                                <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
                                Medical records database schema creation
                                </div>
                                <div className="flex items-center text-xs text-gray-500">
                                <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
                                UI development and notification services
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Testing Phase - Sprint 2 */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 space-y-6">
                        <div className="w-12 h-12 bg-gray-600 rounded-xl flex items-center justify-center">
                            <span className="text-white font-light text-lg">2</span>
                        </div>
                            <div>
                            <h3 className="text-xl font-medium text-gray-800 mb-3">Testing & Refinement</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                Comprehensive testing implementation using JUnit 5 and Jacoco for code coverage analysis. 
                                Resolved database migration challenges with Flyway, implemented Docker containerization, 
                                and achieved a fully functional final product with automated testing pipeline.
                            </p>
                            <div className="space-y-2">
                                <div className="flex items-center text-xs text-gray-500">
                                <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
                                Comprehensive unit and integration testing
                                </div>
                                <div className="flex items-center text-xs text-gray-500">
                                <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
                                Database migration and Docker deployment
                                </div>
                                <div className="flex items-center text-xs text-gray-500">
                                <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
                                Code coverage analysis with Jacoco
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-24 bg-gradient-to-br from-gray-50 to-neutral-50">
            <div className="max-w-6xl mx-auto px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-light text-gray-800 mb-6">Development Approach & Technologies</h2>
                    <div className="w-24 h-px bg-gray-300 mx-auto mb-8"></div>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                    Built with enterprise-grade technologies and modern development practices for scalability, security, and maintainability.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Tech Stack */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-light text-gray-800">Technology Stack</h3>
                        
                        <div className="space-y-6">
                            <div>
                                <p className="text-sm font-medium text-gray-600 mb-3">Backend & Framework</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-gray-600 text-white px-4 py-2 rounded-full text-sm font-light">Spring Boot</span>
                                    <span className="bg-gray-600 text-white px-4 py-2 rounded-full text-sm font-light">Java</span>
                                    <span className="bg-gray-600 text-white px-4 py-2 rounded-full text-sm font-light">Maven</span>
                                </div>
                            </div>
                            
                            <div>
                                <p className="text-sm font-medium text-gray-600 mb-3">Database & Testing</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-gray-600 text-white px-4 py-2 rounded-full text-sm font-light">MySQL</span>
                                    <span className="bg-gray-600 text-white px-4 py-2 rounded-full text-sm font-light">JUnit 5</span>
                                    <span className="bg-gray-600 text-white px-4 py-2 rounded-full text-sm font-light">JaCoCo</span>
                                    <span className="bg-gray-600 text-white px-4 py-2 rounded-full text-sm font-light">Flyway</span>
                                </div>
                            </div>
                            
                            <div>
                                <p className="text-sm font-medium text-gray-600 mb-3">DevOps & Deployment</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-gray-600 text-white px-4 py-2 rounded-full text-sm font-light">Docker</span>
                                    <span className="bg-gray-600 text-white px-4 py-2 rounded-full text-sm font-light">GitHub Actions</span>
                                    <span className="bg-gray-600 text-white px-4 py-2 rounded-full text-sm font-light">GitHub Projects</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Development Insights */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-light text-gray-800">Development Insights</h3>
                        <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
                            <div className="space-y-3">
                            <h4 className="font-medium text-gray-800">Key Achievements</h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                Successfully implemented Agile methodology with 3-sprint development cycle
                                </li>
                                <li className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                Achieved comprehensive test coverage using JUnit 5 and Jacoco
                                </li>
                                <li className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                Delivered a fully functional veterinary management platform
                                </li>
                            </ul>
                            </div>
                            
                            <div className="space-y-3">
                            <h4 className="font-medium text-gray-800">Technical Challenges Overcome</h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                Resolved Maven dependency conflicts and pom.xml management issues
                                </li>
                                <li className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                Mastered Flyway database migrations and MySQL integration
                                </li>
                                <li className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                Implemented effective Git workflow and conflict resolution strategies
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

      

        {/* Resources & Demo */}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-neutral-50">
            <div className="max-w-4xl mx-auto px-8 text-center">
                <h2 className="text-4xl font-light text-gray-800 mb-6">Explore VetCare</h2>
                <div className="w-24 h-px bg-gray-300 mx-auto mb-8"></div>
                <p className="text-lg text-gray-600 leading-relaxed mb-12">
                    Experience the platform through our comprehensive demo and detailed project documentation.
                </p>
                
                <div className="grid md:grid-cols-1 gap-6 max-w-2xl mx-auto">
                    <a
                    href="https://drive.google.com/file/d/1EHZNqgNaIbFR42cohI205vCX2Q0ieUz7/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
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
                        Full walkthrough showcasing features, user interactions, and system capabilities
                        </p>
                    </div>
                    </a>
                </div>
            </div>
        </section>

        <Contact />
        </>
    );
    }