export default function VetCare() {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          VetCare
        </h2>
        <p className="text-lg text-gray-600">Online Vet Clinic Platform</p>
      </div>
      
      <div className="bg-slate-50 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">What It Does</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          A complete web platform that makes veterinary care easier for pet owners. Schedule appointments, 
          manage medical records, request prescriptions, and access pet care resources - all integrated 
          with local clinics for real-time availability and pricing.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center mb-2">
              <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
              <h4 className="font-medium text-gray-900">Smart Scheduling</h4>
            </div>
            <p className="text-sm text-gray-600">Book, reschedule, or cancel appointments with real-time availability</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center mb-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
              <h4 className="font-medium text-gray-900">Medical Records</h4>
            </div>
            <p className="text-sm text-gray-600">Secure access to your pet's complete medical history</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center mb-2">
              <div className="w-2 h-2 bg-rose-400 rounded-full mr-3"></div>
              <h4 className="font-medium text-gray-900">Prescription Management</h4>
            </div>
            <p className="text-sm text-gray-600">Request refills and choose delivery options</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center mb-2">
              <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
              <h4 className="font-medium text-gray-900">Care Resources</h4>
            </div>
            <p className="text-sm text-gray-600">Educational content and pet care guides</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900">How We Built It</h3>
          <div className="bg-slate-50 rounded-lg p-4 space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-indigo-600 text-sm font-bold">1</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">Agile Development</p>
                <p className="text-sm text-gray-600">3-milestone Scrum process with sprint planning and daily standups</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-emerald-600 text-sm font-bold">2</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">Team Collaboration</p>
                <p className="text-sm text-gray-600">GitHub Projects for task management, Teams for communication</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-rose-600 text-sm font-bold">3</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">Production Ready</p>
                <p className="text-sm text-gray-600">CI/CD pipelines, Docker deployment, MVC architecture</p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900">Tech Stack</h3>
          <div className="space-y-3">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-2">Backend & Framework</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm">Spring Boot</span>
                <span className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm">Java</span>
                <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm">Maven</span>
              </div>
            </div>
            
            <div>
              <p className="text-sm font-medium text-gray-600 mb-2">Database & Testing</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">MySQL</span>
                <span className="bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-sm">JUnit 5</span>
              </div>
            </div>
            
            <div>
              <p className="text-sm font-medium text-gray-600 mb-2">DevOps & Deployment</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm">Docker</span>
                <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">GitHub Actions</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="bg-slate-50 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold mb-3">See It in Action</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Watch the full demo to see how VetCare streamlines veterinary care for pet owners and clinics.
        </p>
        <a 
          href="https://drive.google.com/file/d/1EHZNqgNaIbFR42cohI205vCX2Q0ieUz7/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-white text-slate-800 px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors font-medium"
        >
          Watch Demo →
        </a>
      </section>
    </div>
  );
}