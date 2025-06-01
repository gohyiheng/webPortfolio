export default function ClosingTheGap() {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Closing the Gap
        </h2>
        <p className="text-lg text-gray-600">Progress Tracker Web Application</p>
      </div>
      
      <div className="bg-slate-50 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">What It Does</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          A full-stack web application that tracks progress toward Australia's National Agreement on Closing the Gap.
          Features interactive data visualizations and insights to help government officials, Indigenous leaders, 
          and the public understand key outcomes and progress over time.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center mb-2">
              <div className="w-2 h-2 bg-rose-400 rounded-full mr-3"></div>
              <h4 className="font-medium text-gray-900">Data Visualization</h4>
            </div>
            <p className="text-sm text-gray-600">Interactive charts comparing 2016-2021 census data</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center mb-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
              <h4 className="font-medium text-gray-900">Outcome Tracking</h4>
            </div>
            <p className="text-sm text-gray-600">Monitor progress across key health, education, and economic indicators</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center mb-2">
              <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
              <h4 className="font-medium text-gray-900">Database Integration</h4>
            </div>
            <p className="text-sm text-gray-600">Normalized SQLite database with efficient data management</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center mb-2">
              <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
              <h4 className="font-medium text-gray-900">User Testing</h4>
            </div>
            <p className="text-sm text-gray-600">Comprehensive testing framework with personas and scenarios</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900">How We Built It</h3>
          <div className="bg-slate-50 rounded-lg p-4 space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-rose-600 text-sm font-bold">1</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">Full-Stack Development</p>
                <p className="text-sm text-gray-600">Custom UX/UI design with comprehensive backend integration</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-emerald-600 text-sm font-bold">2</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">Data Architecture</p>
                <p className="text-sm text-gray-600">Normalized database model (3NF) with SQLite and JDBC</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-indigo-600 text-sm font-bold">3</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">User-Centered Design</p>
                <p className="text-sm text-gray-600">Comprehensive user testing with feedback integration</p>
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
                <span className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm">Java</span>
                <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">Javalin</span>
                <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">JDBC</span>
              </div>
            </div>
            
            <div>
              <p className="text-sm font-medium text-gray-600 mb-2">Database & Frontend</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm">SQLite</span>
                <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm">HTML/CSS</span>
              </div>
            </div>
            
            <div>
              <p className="text-sm font-medium text-gray-600 mb-2">DevOps & Version Control</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-sm">GitHub</span>
                <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm">Git</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="bg-slate-50 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold mb-3">See It in Action</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Watch the full demo showcasing data visualization, user interactions, and progress tracking features.
        </p>
        <a
          href="https://drive.google.com/file/d/1kmUzmaVhK5Ifna0Uw_fqj-_BH6J9Y8je/view?usp=drive_link"
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