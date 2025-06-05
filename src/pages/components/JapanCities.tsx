export default function JapanCities() {
  return (
    <div className="mx-auto p-8 space-y-8 bg-gradient-to-br from-gray-50 to-neutral-50 min-h-screen">
        <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">
            Japan Cities Ranking
        </h2>
        <p className="text-lg text-gray-600">City Recommendation System</p>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 mb-8 shadow-sm">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">What It Does</h3>
        <p className="text-gray-600 leading-relaxed mb-4">
            A comprehensive travel platform that helps discover the perfect Japanese destinations based on your various rankings. 
            Using web-scraped data from Japan Guide, the system provides recommendations ranging from 
            popular tourist spots to hidden gems across all prefectures and regions.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
            <div className="flex items-center mb-2">
                <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
                <h4 className="font-medium text-gray-800">Smart Recommendations</h4>
            </div>
            <p className="text-sm text-gray-600">AI-powered suggestions for hidden gems, balanced, and popular destinations</p>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
            <div className="flex items-center mb-2">
                <div className="w-2 h-2 bg-gray-700 rounded-full mr-3"></div>
                <h4 className="font-medium text-gray-800">Comprehensive Data</h4>
            </div>
            <p className="text-sm text-gray-600">City ratings, visitor statistics, and regional information</p>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
            <div className="flex items-center mb-2">
                <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
                <h4 className="font-medium text-gray-800">Prefecture Coverage</h4>
            </div>
            <p className="text-sm text-gray-600">Complete coverage of all Japanese prefectures and regions</p>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
            <div className="flex items-center mb-2">
                <div className="w-2 h-2 bg-gray-700 rounded-full mr-3"></div>
                <h4 className="font-medium text-gray-800">Interactive Interface</h4>
            </div>
            <p className="text-sm text-gray-600">React-based dashboard with filtering and search capabilities</p>
            </div>
        </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
        <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Development Process</h3>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 space-y-3 shadow-sm">
            <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold">1</span>
                </div>
                <div>
                <p className="font-medium text-gray-800">Web Scraping</p>
                <p className="text-sm text-gray-600">Python scripts to extract information such as city data (city, prefecture, region), ratings, and visitor statistics from Japan Guide</p>
                </div>
            </div>
            
            <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gray-700 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold">2</span>
                </div>
                <div>
                <p className="font-medium text-gray-800">Data Cleaning</p>
                <p className="text-sm text-gray-600">Pandas processing in Jupyter Notebook to clean NaN values and redundant information retrieved when scrapping for data normalization </p>
                </div>
            </div>
            
            <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold">3</span>
                </div>
                <div>
                <p className="font-medium text-gray-800">Recommendation Engine</p>
                <p className="text-sm text-gray-600">Algorithm to rank destinations as hidden gems, balanced, or popular</p>
                </div>
            </div>
            
            <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gray-700 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold">4</span>
                </div>
                <div>
                <p className="font-medium text-gray-800">React Implementation</p>
                <p className="text-sm text-gray-600">Interactive frontend for exploring and filtering recommendations</p>
                </div>
            </div>
            </div>
        </section>

        <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Tech Stack</h3>
            <div className="space-y-3">
            <div>
                <p className="text-sm font-medium text-gray-600 mb-2">Data Collection & Processing</p>
                <div className="flex flex-wrap gap-2">
                <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm">Python</span>
                <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm">Pandas</span>
                </div>
            </div>
            
            <div>
                <p className="text-sm font-medium text-gray-600 mb-2">Development Environment</p>
                <div className="flex flex-wrap gap-2">
                <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">Jupyter Notebook</span>
                <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm">Data Analysis</span>
                </div>
            </div>
            
            <div>
                <p className="text-sm font-medium text-gray-600 mb-2">Frontend & Visualization</p>
                <div className="flex flex-wrap gap-2">
                <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm">TypeScript</span>
                </div>
            </div>
            </div>
        </section>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm">
            <div className="flex items-center mb-3">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
            <h4 className="font-semibold text-gray-800">Hidden Gems</h4>
            </div>
            <p className="text-sm text-gray-600 mb-3">
            Discover lesser-known destinations with high ratings but lower visitor traffic
            </p>
            <div className="text-xs text-gray-500">
            Perfect for travelers seeking authentic experiences
            </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm">
            <div className="flex items-center mb-3">
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
            <h4 className="font-semibold text-gray-800">Balanced</h4>
            </div>
            <p className="text-sm text-gray-600 mb-3">
            Well-rounded destinations offering good ratings with moderate popularity
            </p>
            <div className="text-xs text-gray-500">
            Ideal for first-time visitors to Japan
            </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm">
            <div className="flex items-center mb-3">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
            <h4 className="font-semibold text-gray-800">Popular</h4>
            </div>
            <p className="text-sm text-gray-600 mb-3">
            Must-see destinations with high visitor numbers and established reputation
            </p>
            <div className="text-xs text-gray-500">
            Classic tourist spots and cultural landmarks
            </div>
        </div>
        </div>

        <section className="bg-white/80 backdrop-blur-sm rounded-xl p-6 mb-8 shadow-sm">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Features</h3>
        <div className="grid md:grid-cols-2 gap-6">
            <div>
            <h4 className="font-medium text-gray-800 mb-2">Data-Driven Insights</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
                Leveraging comprehensive data from Japan Guide including city ratings, visitor statistics, 
                prefecture information, and regional categorization to provide intelligent recommendations.
            </p>
            </div>
            <div>
            <h4 className="font-medium text-gray-800 mb-2">Personalized Experience</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
                Advanced filtering system allows users to discover destinations based on their preferences, 
                whether seeking popular attractions or off-the-beaten-path experiences.
            </p>
            </div>
        </div>
        </section>

    <section className="bg-white/80 backdrop-blur-sm rounded-xl p-6 mb-8 shadow-sm">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">See It in Action</h3>
        <p className="text-gray-600 leading-relaxed mb-4">
            Watch the full demo showcasing data visualization, user interactions, and progress tracking features.
        </p>
        <a
            href="/recommender"
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