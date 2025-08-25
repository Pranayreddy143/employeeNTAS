import React, { useState } from 'react';
import { Camera, Download, Eye, Clock, Filter, Search } from 'lucide-react';

const Screenshots = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const screenshots = [
    {
      id: 1,
      timestamp: '2024-03-15 14:32:15',
      title: 'VS Code - React Development',
      application: 'Visual Studio Code',
      productive: true,
      thumbnail: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
      size: '1920x1080'
    },
    {
      id: 2,
      timestamp: '2024-03-15 14:25:42',
      title: 'Figma - UI Design Project',
      application: 'Figma',
      productive: true,
      thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      size: '1920x1080'
    },
    {
      id: 3,
      timestamp: '2024-03-15 14:18:33',
      title: 'Google Chrome - Documentation',
      application: 'Google Chrome',
      productive: true,
      thumbnail: 'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=800',
      size: '1920x1080'
    },
    {
      id: 4,
      timestamp: '2024-03-15 14:12:21',
      title: 'Slack - Team Communication',
      application: 'Slack',
      productive: true,
      thumbnail: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      size: '1920x1080'
    },
    {
      id: 5,
      timestamp: '2024-03-15 13:58:47',
      title: 'YouTube - Tutorial Video',
      application: 'Google Chrome',
      productive: false,
      thumbnail: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      size: '1920x1080'
    },
    {
      id: 6,
      timestamp: '2024-03-15 13:45:12',
      title: 'Excel - Data Analysis',
      application: 'Microsoft Excel',
      productive: true,
      thumbnail: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpg?auto=compress&cs=tinysrgb&w=800',
      size: '1920x1080'
    }
  ];

  const filteredScreenshots = screenshots.filter(screenshot => {
    const matchesFilter = selectedFilter === 'all' || 
      (selectedFilter === 'productive' && screenshot.productive) ||
      (selectedFilter === 'non-productive' && !screenshot.productive);
    
    const matchesSearch = searchTerm === '' || 
      screenshot.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      screenshot.application.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Desktop Screenshots</h2>
        <div className="flex items-center space-x-2 text-sm text-gray-400">
          <Camera className="w-4 h-4" />
          <span>Auto-capture every 5 minutes</span>
        </div>
      </div>

      {/* Screenshot Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-2xl font-bold text-blue-400">127</div>
          <div className="text-sm text-gray-400">Today's Screenshots</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-2xl font-bold text-green-400">89%</div>
          <div className="text-sm text-gray-400">Productive Activity</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-2xl font-bold text-white">5 min</div>
          <div className="text-sm text-gray-400">Capture Interval</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-2xl font-bold text-purple-400">2.4 GB</div>
          <div className="text-sm text-gray-400">Storage Used</div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <select 
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm"
            >
              <option value="all">All Screenshots</option>
              <option value="productive">Productive Only</option>
              <option value="non-productive">Non-productive Only</option>
            </select>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Search className="w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search screenshots..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm w-64"
          />
        </div>
      </div>

      {/* Screenshot Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredScreenshots.map((screenshot) => (
          <div key={screenshot.id} className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden group hover:border-blue-500 transition-colors">
            <div className="relative">
              <img 
                src={screenshot.thumbnail} 
                alt={screenshot.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-3">
                <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Eye className="w-4 h-4" />
                </button>
                <button className="p-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                  <Download className="w-4 h-4" />
                </button>
              </div>
              <div className="absolute top-2 right-2">
                <span className={`px-2 py-1 rounded-full text-xs ${
                  screenshot.productive ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
                }`}>
                  {screenshot.productive ? 'Productive' : 'Non-productive'}
                </span>
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="text-white font-semibold mb-2 truncate">{screenshot.title}</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center justify-between">
                  <span>Application:</span>
                  <span className="text-white">{screenshot.application}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Captured:</span>
                  <span className="text-white">{screenshot.timestamp.split(' ')[1]}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Resolution:</span>
                  <span className="text-white">{screenshot.size}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Configuration Panel */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-semibold text-white mb-4">Screenshot Configuration</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="text-sm text-gray-400">Capture Interval</label>
            <select className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white">
              <option>Every 2 minutes</option>
              <option selected>Every 5 minutes</option>
              <option>Every 10 minutes</option>
              <option>Every 15 minutes</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm text-gray-400">Image Quality</label>
            <select className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white">
              <option>Low (50%)</option>
              <option>Medium (75%)</option>
              <option selected>High (90%)</option>
              <option>Maximum (100%)</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm text-gray-400">Storage Duration</label>
            <select className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white">
              <option>7 days</option>
              <option>30 days</option>
              <option selected>90 days</option>
              <option>1 year</option>
            </select>
          </div>
        </div>
        
        <div className="mt-6 flex justify-between items-center">
          <div className="text-sm text-gray-400">
            Screenshots are automatically captured during active work sessions
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Screenshots;