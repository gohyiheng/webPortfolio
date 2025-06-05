import React, { useState, useEffect } from 'react';
import { Search, MapPin, Star, Users, TrendingUp, Eye, Gem, Upload, ExternalLink } from 'lucide-react';
import Papa from 'papaparse';

const CSVRecommendationsApp = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedType, setSelectedType] = useState('Balanced_Score');
  const [searchQuery, setSearchQuery] = useState('');
  const [topN, setTopN] = useState(10);

  // Load CSV file
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && (file.type === 'text/csv' || file.name.endsWith('.csv'))) {
      setLoading(true);
      setError(null);
      
      Papa.parse(file, {
        complete: (result) => {
          try {
            console.log('CSV parsed result:', result);
            
            // Skip first row (headers) and filter empty rows
            const dataRows = result.data.slice(1).filter(row => row.length > 1 && row[0] !== '');
            
            const csvData = dataRows.map((row, index) => {
              // Map according to your CSV structure:
              // Region, Prefecture, City, Link, Description, Rating, Visits, normal weight, Rating_Normalized, Visits_Normalized, Balanced_Score, Popular_Score, Hidden_Gem_Score
              return {
                region: row[0] || '',
                prefecture: row[1] || '',
                city: row[2] || `City ${index + 1}`,
                link: row[3] || '',
                description: row[4] || 'No description available',
                rating: parseFloat(row[5]) || 0,
                visits: parseInt(row[6]) || 0,
                normal_weight: parseFloat(row[7]) || 0,
                rating_normalized: parseFloat(row[8]) || 0,
                visits_normalized: parseFloat(row[9]) || 0,
                balanced_score: parseFloat(row[10]) || 0,
                popular_score: parseFloat(row[11]) || 0,
                hidden_gem_score: parseFloat(row[12]) || 0
              };
            });
            
            console.log('Processed CSV data:', csvData);
            
            if (csvData.length === 0) {
              setError('No valid data found in CSV file');
              setLoading(false);
              return;
            }
            
            setData(csvData);
            setFilteredData(csvData);
            calculateStats(csvData);
            setLoading(false);
          } catch (err) {
            console.error('CSV parsing error:', err);
            setError('Error parsing CSV: ' + err.message);
            setLoading(false);
          }
        },
        header: false,
        skipEmptyLines: true,
        error: (error) => {
          setError('Error reading CSV: ' + error.message);
          setLoading(false);
        }
      });
    } else {
      setError('Please select a valid CSV file');
    }
  };

  // Calculate statistics
  const calculateStats = (csvData) => {
    if (csvData.length === 0) return;
    
    const totalVisits = csvData.reduce((sum, item) => sum + item.visits, 0);
    const avgRating = csvData.reduce((sum, item) => sum + item.rating, 0) / csvData.length;
    const ratings = csvData.map(item => item.rating);
    const visits = csvData.map(item => item.visits);
    
    setStats({
      total_cities: csvData.length,
      average_rating: avgRating,
      total_visits: totalVisits,
      rating_range: {
        min: Math.min(...ratings),
        max: Math.max(...ratings)
      },
      visits_range: {
        min: Math.min(...visits),
        max: Math.max(...visits)
      },
      regions: [...new Set(csvData.map(item => item.region))],
      prefectures: [...new Set(csvData.map(item => item.prefecture))]
    });
  };

  // Filter and sort data
  const filterAndSortData = () => {
    let filtered = [...data];
    
    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(item =>
        item.city.toLowerCase().includes(query) ||
        item.prefecture.toLowerCase().includes(query) ||
        item.region.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
      );
    }
    
    // Sort by selected score type
    filtered.sort((a, b) => {
      switch (selectedType) {
        case 'Balanced_Score':
          return b.balanced_score - a.balanced_score;
        case 'Popular_Score':
          return b.popular_score - a.popular_score;
        case 'Hidden_Gem_Score':
          return b.hidden_gem_score - a.hidden_gem_score;
        case 'Rating':
          return b.rating - a.rating;
        case 'Visits':
          return b.visits - a.visits;
        default:
          return b.balanced_score - a.balanced_score;
      }
    });
    
    // Limit results
    filtered = filtered.slice(0, topN);
    
    setFilteredData(filtered);
  };

  // Apply filters when dependencies change
  useEffect(() => {
    if (data.length > 0) {
      filterAndSortData();
    }
  }, [data, searchQuery, selectedType, topN]);

  const getTypeIcon = (type) => {
    switch (type) {
      case 'Balanced_Score': return <TrendingUp className="w-5 h-5" />;
      case 'Popular_Score': return <Users className="w-5 h-5" />;
      case 'Hidden_Gem_Score': return <Gem className="w-5 h-5" />;
      case 'Rating': return <Star className="w-5 h-5" />;
      case 'Visits': return <Eye className="w-5 h-5" />;
      default: return <TrendingUp className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Balanced_Score': return 'bg-blue-500';
      case 'Popular_Score': return 'bg-green-500';
      case 'Hidden_Gem_Score': return 'bg-purple-500';
      case 'Rating': return 'bg-yellow-500';
      case 'Visits': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat().format(num);
  };

  const getScoreValue = (item, type) => {
    switch (type) {
      case 'Balanced_Score': return item.balanced_score.toFixed(3);
      case 'Popular_Score': return item.popular_score.toFixed(3);
      case 'Hidden_Gem_Score': return item.hidden_gem_score.toFixed(3);
      case 'Rating': return item.rating.toFixed(1);
      case 'Visits': return formatNumber(item.visits);
      default: return item.balanced_score.toFixed(3);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            🇯🇵 Japan Travel Recommendations
          </h1>
          <p className="text-xl text-gray-600">
            Discover amazing destinations across Japan with intelligent scoring
          </p>
        </div>

        {/* File Upload */}
        {data.length === 0 && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-200">
            <div className="text-center">
              <Upload className="w-20 h-20 text-indigo-400 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                Upload Your Japan Travel CSV
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                Select your recommendations CSV file to explore destinations
              </p>
              <input
                type="file"
                accept=".csv"
                onChange={handleFileUpload}
                className="block w-full text-lg text-gray-500 file:mr-4 file:py-3 file:px-6 file:rounded-full file:border-0 file:text-lg file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 cursor-pointer"
              />
            </div>
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-indigo-500 mx-auto"></div>
            <p className="mt-6 text-xl text-gray-600">Processing your CSV file...</p>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="bg-red-100 border-l-4 border-red-400 text-red-700 px-6 py-4 rounded-lg mb-8 text-lg">
            <strong>Error:</strong> {error}
          </div>
        )}

        {/* Main Content - Only show if data is loaded */}
        {data.length > 0 && (
          <>
            {/* Stats Cards */}
            {stats && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">Total Cities</p>
                      <p className="text-3xl font-bold text-gray-800">{stats.total_cities}</p>
                    </div>
                    <MapPin className="w-10 h-10 text-blue-500" />
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">Avg Rating</p>
                      <p className="text-3xl font-bold text-gray-800">{stats.average_rating.toFixed(1)}</p>
                    </div>
                    <Star className="w-10 h-10 text-yellow-500" />
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">Total Visits</p>
                      <p className="text-3xl font-bold text-gray-800">{formatNumber(stats.total_visits)}</p>
                    </div>
                    <Eye className="w-10 h-10 text-green-500" />
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">Prefectures</p>
                      <p className="text-3xl font-bold text-gray-800">{stats.prefectures.length}</p>
                    </div>
                    <MapPin className="w-10 h-10 text-purple-500" />
                  </div>
                </div>
              </div>
            )}

            {/* Controls */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search cities, prefectures, descriptions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-lg"
                  />
                </div>
                
                {/* Sort Type */}
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-lg bg-white"
                >
                  <option value="Balanced_Score">⚖️ Balanced Score</option>
                  <option value="Popular_Score">👥 Popular Score</option>
                  <option value="Hidden_Gem_Score">💎 Hidden Gem Score</option>
                  <option value="Rating">⭐ Rating</option>
                  <option value="Visits">👁️ Visits</option>
                </select>
                
                {/* Top N */}
                <div className="flex items-center space-x-3">
                  <label className="text-lg font-medium text-gray-700">Show top:</label>
                  <select
                    value={topN}
                    onChange={(e) => setTopN(parseInt(e.target.value))}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-lg bg-white"
                  >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                    <option value={100}>All</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredData.map((city, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-indigo-300">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-1">
                          #{index + 1} {city.city}
                        </h3>
                        <p className="text-sm text-gray-600 font-medium">{city.prefecture}</p>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-sm font-bold text-white ${getTypeColor(selectedType)}`}>
                        {getScoreValue(city, selectedType)}
                      </div>
                    </div>
                    
                    <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                      {city.description}
                    </p>
                    
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 mr-1" />
                          <span className="text-sm font-semibold">{city.rating}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 text-gray-400 mr-1" />
                          <span className="text-sm text-gray-600 font-medium">{formatNumber(city.visits)}</span>
                        </div>
                      </div>
                      {city.link && (
                        <a 
                          href={city.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-indigo-600 hover:text-indigo-800 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                    
                    <div className="pt-4 border-t border-gray-200">
                      <div className="grid grid-cols-3 gap-3 text-xs">
                        <div className="text-center">
                          <p className="text-gray-500 font-medium uppercase tracking-wide">Balanced</p>
                          <p className="font-bold text-blue-600">{city.balanced_score.toFixed(3)}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-gray-500 font-medium uppercase tracking-wide">Popular</p>
                          <p className="font-bold text-green-600">{city.popular_score.toFixed(3)}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-gray-500 font-medium uppercase tracking-wide">Hidden Gem</p>
                          <p className="font-bold text-purple-600">{city.hidden_gem_score.toFixed(3)}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Results Info */}
            <div className="mt-12 text-center">
              <div className="bg-white rounded-lg shadow-md p-4 inline-block">
                <p className="text-lg font-medium text-gray-700">
                  Showing {filteredData.length} of {data.length} destinations
                </p>
                {searchQuery && (
                  <p className="text-sm text-gray-500 mt-1">
                    Filtered by: "{searchQuery}"
                  </p>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CSVRecommendationsApp;