import React from 'react';
import { Globe, ExternalLink, Shield, AlertTriangle, CheckCircle } from 'lucide-react';

const URLTracking = () => {
  const urlData = [
    { 
      url: 'github.com', 
      title: 'GitHub - Where software is built', 
      visits: 47, 
      time: '2h 15m', 
      category: 'Development',
      risk: 'safe',
      path: '/microsoft/vscode'
    },
    { 
      url: 'stackoverflow.com', 
      title: 'Stack Overflow - Programming Q&A', 
      visits: 23, 
      time: '1h 32m', 
      category: 'Development',
      risk: 'safe',
      path: '/questions/tagged/react'
    },
    { 
      url: 'docs.google.com', 
      title: 'Project Specification Document', 
      visits: 15, 
      time: '45m', 
      category: 'Productivity',
      risk: 'safe',
      path: '/document/d/1abc123'
    },
    { 
      url: 'youtube.com', 
      title: 'YouTube - Video Platform', 
      visits: 8, 
      time: '32m', 
      category: 'Entertainment',
      risk: 'warning',
      path: '/watch?v=dQw4w9WgXcQ'
    },
    { 
      url: 'linkedin.com', 
      title: 'LinkedIn - Professional Network', 
      visits: 12, 
      time: '28m', 
      category: 'Social',
      risk: 'caution',
      path: '/in/johndoe'
    },
    { 
      url: 'reddit.com', 
      title: 'Reddit - Front Page of Internet', 
      visits: 6, 
      time: '22m', 
      category: 'Entertainment',
      risk: 'warning',
      path: '/r/programming'
    }
  ];

  const getRiskIcon = (risk: string) => {
    switch (risk) {
      case 'safe':
        return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'caution':
        return <Shield className="w-4 h-4 text-yellow-400" />;
      case 'warning':
        return <AlertTriangle className="w-4 h-4 text-red-400" />;
      default:
        return <Shield className="w-4 h-4 text-gray-400" />;
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'safe':
        return 'bg-green-900 text-green-300';
      case 'caution':
        return 'bg-yellow-900 text-yellow-300';
      case 'warning':
        return 'bg-red-900 text-red-300';
      default:
        return 'bg-gray-900 text-gray-300';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">URL & Web Activity Tracking</h2>
        <div className="text-sm text-gray-400">
          Monitoring website visits and content paths
        </div>
      </div>

      {/* Web Activity Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-2xl font-bold text-blue-400">47</div>
          <div className="text-sm text-gray-400">Unique URLs</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-2xl font-bold text-green-400">154</div>
          <div className="text-sm text-gray-400">Total Visits</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-2xl font-bold text-white">5h 32m</div>
          <div className="text-sm text-gray-400">Browse Time</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-2xl font-bold text-purple-400">85%</div>
          <div className="text-sm text-gray-400">Work-related</div>
        </div>
      </div>

      {/* URL Details Table */}
      <div className="bg-gray-800 rounded-lg border border-gray-700">
        <div className="p-6 border-b border-gray-700">
          <h3 className="text-lg font-semibold text-white">Website Activity Details</h3>
        </div>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-gray-700">
                  <th className="text-gray-400 font-medium pb-3">Website & Title</th>
                  <th className="text-gray-400 font-medium pb-3">Path</th>
                  <th className="text-gray-400 font-medium pb-3">Visits</th>
                  <th className="text-gray-400 font-medium pb-3">Time</th>
                  <th className="text-gray-400 font-medium pb-3">Category</th>
                  <th className="text-gray-400 font-medium pb-3">Risk Level</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {urlData.map((site, index) => (
                  <tr key={index} className="hover:bg-gray-700 transition-colors">
                    <td className="py-4">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <Globe className="w-4 h-4 text-blue-400" />
                          <span className="text-white font-medium">{site.url}</span>
                          <ExternalLink className="w-3 h-3 text-gray-400" />
                        </div>
                        <div className="text-sm text-gray-400 truncate max-w-xs">
                          {site.title}
                        </div>
                      </div>
                    </td>
                    <td className="py-4">
                      <code className="text-xs bg-gray-700 px-2 py-1 rounded text-cyan-300">
                        {site.path}
                      </code>
                    </td>
                    <td className="py-4 text-white font-medium">{site.visits}</td>
                    <td className="py-4 text-white">{site.time}</td>
                    <td className="py-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        site.category === 'Development' ? 'bg-blue-900 text-blue-300' :
                        site.category === 'Productivity' ? 'bg-green-900 text-green-300' :
                        site.category === 'Social' ? 'bg-purple-900 text-purple-300' :
                        'bg-red-900 text-red-300'
                      }`}>
                        {site.category}
                      </span>
                    </td>
                    <td className="py-4">
                      <div className="flex items-center space-x-2">
                        {getRiskIcon(site.risk)}
                        <span className={`px-2 py-1 rounded-full text-xs ${getRiskColor(site.risk)}`}>
                          {site.risk.charAt(0).toUpperCase() + site.risk.slice(1)}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Category Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">Website Categories</h3>
          <div className="space-y-4">
            {[
              { category: 'Development', percentage: 65, sites: 28, color: 'bg-blue-500' },
              { category: 'Productivity', percentage: 20, sites: 12, color: 'bg-green-500' },
              { category: 'Social', percentage: 10, sites: 5, color: 'bg-purple-500' },
              { category: 'Entertainment', percentage: 5, sites: 2, color: 'bg-red-500' },
            ].map((cat, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-300">{cat.category}</span>
                  <span className="text-white font-medium">{cat.sites} sites</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className={`${cat.color} h-2 rounded-full transition-all duration-500`}
                    style={{ width: `${cat.percentage}%` }}
                  ></div>
                </div>
                <div className="text-right text-sm text-gray-400">{cat.percentage}% of time</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">Security Insights</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <div>
                  <div className="text-white font-medium">Safe Websites</div>
                  <div className="text-gray-400 text-sm">Verified secure sites</div>
                </div>
              </div>
              <div className="text-green-400 font-bold">32</div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-yellow-400" />
                <div>
                  <div className="text-white font-medium">Caution Required</div>
                  <div className="text-gray-400 text-sm">Monitor usage</div>
                </div>
              </div>
              <div className="text-yellow-400 font-bold">8</div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5 text-red-400" />
                <div>
                  <div className="text-white font-medium">High Risk</div>
                  <div className="text-gray-400 text-sm">Policy violations</div>
                </div>
              </div>
              <div className="text-red-400 font-bold">7</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default URLTracking;