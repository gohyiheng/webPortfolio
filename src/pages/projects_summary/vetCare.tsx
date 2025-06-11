import Link from "next/link";

export default function VetCare() {
  return (
    <div className="mx-auto p-8 space-y-8 bg-gradient-to-br from-gray-50 to-neutral-50 min-h-screen">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">
          VetCare
        </h2>
        <p className="text-lg text-gray-600">Online Vet Clinic Platform</p>
      </div>
      
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 mb-8 shadow-sm">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">What It Does</h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          A complete web platform that makes veterinary care easier for pet owners. Schedule appointments, 
          manage medical records, request prescriptions, and access pet care resources - all integrated 
          with local clinics for real-time availability and pricing.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
            <div className="flex items-center mb-2">
              <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
              <h4 className="font-medium text-gray-800">Smart Scheduling</h4>
            </div>
            <p className="text-sm text-gray-600">Book, reschedule, or cancel appointments with real-time availability</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
            <div className="flex items-center mb-2">
              <div className="w-2 h-2 bg-gray-700 rounded-full mr-3"></div>
              <h4 className="font-medium text-gray-800">Medical Records</h4>
            </div>
            <p className="text-sm text-gray-600">Secure access to your pet&#39;s complete medical history</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
            <div className="flex items-center mb-2">
              <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
              <h4 className="font-medium text-gray-800">Prescription Management</h4>
            </div>
            <p className="text-sm text-gray-600">Request refills and choose delivery options</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
            <div className="flex items-center mb-2">
              <div className="w-2 h-2 bg-gray-700 rounded-full mr-3"></div>
              <h4 className="font-medium text-gray-800">Care Resources</h4>
            </div>
            <p className="text-sm text-gray-600">Educational content and pet care guides</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">How We Built It</h3>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 space-y-3 shadow-sm">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold">1</span>
              </div>
              <div>
                <p className="font-medium text-gray-800">Agile Development</p>
                <p className="text-sm text-gray-600">3-milestone Scrum process with sprint planning and daily standups</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-gray-700 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold">2</span>
              </div>
              <div>
                <p className="font-medium text-gray-800">Team Collaboration</p>
                <p className="text-sm text-gray-600">GitHub Projects for task management, Teams for communication</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold">3</span>
              </div>
              <div>
                <p className="font-medium text-gray-800">Production Ready</p>
                <p className="text-sm text-gray-600">CI/CD pipelines, Docker deployment, MVC architecture</p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">Tech Stack</h3>
          <div className="space-y-3">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-2">Backend & Framework</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm">Spring Boot</span>
                <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm">Java</span>
                <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm">Maven</span>
              </div>
            </div>
            
            <div>
              <p className="text-sm font-medium text-gray-600 mb-2">Database & Testing</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm">MySQL</span>
                <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm">JUnit 5</span>
                <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm">JaCoCo</span>
                <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm">Flyway</span>
              </div>
            </div>
            
            <div>
              <p className="text-sm font-medium text-gray-600 mb-2">DevOps & Deployment</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm">Docker</span>
                <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm">GitHub Actions</span>
                <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm">GitHub Projects</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="bg-white/80 backdrop-blur-sm rounded-xl p-6 mb-8 shadow-sm items-center text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">For more information</h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          Watch the full demo showcasing data visualization, user interactions, and progress tracking features or view more information about the project.
        </p>
        <Link
          href="https://drive.google.com/file/d/1EHZNqgNaIbFR42cohI205vCX2Q0ieUz7/view?usp=drive_link"
          target="_blank"
          className="block items-center bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-300 hover:text-gray-800 transition-colors font-medium mb-4"
        >
          Watch Demo →
        </Link>
        <Link
          href="/projects_detailed/vet-care"
          className="block items-center bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-300 hover:text-gray-800 transition-colors font-medium"
        >
          View more information about the project →
        </Link>
      </section>
    </div>
  );
}