export default function Woofya() {
  return (
    <div className="mx-auto p-8 space-y-8 bg-gradient-to-br from-gray-50 to-neutral-50 min-h-screen">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">
          Woofya
        </h2>
        <p className="text-lg text-gray-600">Social Platform for Dog Owners</p>
      </div>
      
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 mb-8 shadow-sm">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">What It Does</h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          A social networking platform that connects dog owners in a vibrant community. Features comprehensive 
          pet management tools, QR profile sharing, and smart reminders while supporting veterinarians 
          and pet brands in reaching their audience effectively.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
            <div className="flex items-center mb-2">
              <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
              <h4 className="font-medium text-gray-800">Smart Onboarding</h4>
            </div>
            <p className="text-sm text-gray-600">Streamlined setup and verification for new pet profiles</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
            <div className="flex items-center mb-2">
              <div className="w-2 h-2 bg-gray-700 rounded-full mr-3"></div>
              <h4 className="font-medium text-gray-800">QR Pet Profiles</h4>
            </div>
            <p className="text-sm text-gray-600">Dynamic QR codes for easy profile sharing and connection</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
            <div className="flex items-center mb-2">
              <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
              <h4 className="font-medium text-gray-800">Smart Reminders</h4>
            </div>
            <p className="text-sm text-gray-600">Automated notifications for vaccinations and checkups</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
            <div className="flex items-center mb-2">
              <div className="w-2 h-2 bg-gray-700 rounded-full mr-3"></div>
              <h4 className="font-medium text-gray-800">Analytics Dashboard</h4>
            </div>
            <p className="text-sm text-gray-600">Data insights for tracking engagement and community growth</p>
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
                <p className="text-sm text-gray-600">Weekly sprints with daily standups and regular client demos</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-gray-700 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold">2</span>
              </div>
              <div>
                <p className="font-medium text-gray-800">Backend Architecture</p>
                <p className="text-sm text-gray-600">Firebase Auth integration with Directus CMS for data management</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold">3</span>
              </div>
              <div>
                <p className="font-medium text-gray-800">Social Features</p>
                <p className="text-sm text-gray-600">Community-focused design with QR integration and smart notifications</p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">Tech Stack</h3>
          <div className="space-y-3">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-2">Authentication & Backend</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm">Firebase Auth</span>
                <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">Directus CMS</span>
              </div>
            </div>
            
            <div>
              <p className="text-sm font-medium text-gray-600 mb-2">Development & Workflow</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm">Git/GitHub</span>
                <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">Agile/Scrum</span>
                <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm">Trello</span>
              </div>
            </div>
            
            <div>
              <p className="text-sm font-medium text-gray-600 mb-2">Key Features Built</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">QR Integration</span>
                <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm">Smart Reminders</span>
                <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">User Onboarding</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="bg-white/80 backdrop-blur-sm rounded-xl p-6 mb-8 shadow-sm">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">See It in Action</h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          Watch the full demo to see how Woofya connects dog owners and streamlines pet care management.
        </p>
        <a 
          href="https://drive.google.com/file/d/1EHZNqgNaIbFR42cohI205vCX2Q0ieUz7/view?usp=drive_link"
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