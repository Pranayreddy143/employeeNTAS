import React, { useState } from 'react';
import { Activity, FileText, Folder, ExternalLink, Clock, Filter } from 'lucide-react';

const ActivityLogger = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const activities = [
    {
      id: 1,
      timestamp: '14:32:15',
      type: 'file',
      action: 'opened',
      target: 'src/components/Dashboard.tsx',
      application: 'Visual Studio Code',
      duration: '23m 15s',
      productive: true,
      title: 'React Dashboard Component'
    },
    {
      id: 2,
      timestamp: '14:28:42',
      type: 'url',
      action: 'visited',
      target: 'https://github.com/microsoft/vscode',
      application: 'Google Chrome',
      duration: '5m 32s',
      productive: true,
      title: 'Visual Studio Code - GitHub Repository'
    },
    {
      id: 3,
      timestamp: '14:25:18',
      type: 'file',
      action: 'modified',
      target: '/home/user/projects/webapp/package.json',
      application: 'Visual Studio Code',
      duration: '12m 8s',
      productive: true,
      title: 'Package Configuration File'
    },
    {
      id: 4,
      timestamp: '14:22:03',
      type: 'url',
      action: 'visited',
      target: 'https://stackoverflow.com/questions/tagged/react',
      application: 'Google Chrome',
      duration: '8m 47s',
      productive: true,
      title: 'React Questions - Stack Overflow'
    },
    {
      id: 5,
      timestamp: '14:18:55',
      type: 'file',
      action: 'created',
      target: '/home/user/projects/webapp/src/utils/helpers.ts',
      application: 'Visual Studio Code',
      duration: '15m 22s',
      productive: true,
      title: 'TypeScript Helper Functions'
    },
    {
      id: 6,
      timestamp: '14:15:12',
      type: 'url',
      action: 'visited',
      target: 'https://youtube.com/watch?v=dQw4w9WgXcQ',
      application: 'Google Chrome',
      duration: '3m 28s',
      productive: false,
      title: 'YouTube Video - Entertainment'
    },
    {
      id: 7,
      timestamp: '14:12:34',
      type: 'file',
      action: 'opened',
      target: '/home/user/documents/meeting-notes.md',
      application: 'Typora',
      duration: '7m 15s',
      productive: true,
      title: 'Team Meeting Notes'
    },
    {
      id: 8,
      timestamp: '14:08:47',
      type: 'folder',
      action: 'accessed',
      target: '/home/user/downloads',
      application: 'File Explorer',
      duration: '2m 12s',
      productive: true,
      title: 'Downloads Directory'
    }
  ];

  const filteredActivities = activities.filter(activity => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'files') return activity.type === 'file' || activity.type === 'folder';
    if (selectedFilter === 'urls') return activity.type === 'url';
    if (selectedFilter === 'productive') return activity.productive;
    if (selectedFilter === 'non-productive') return !activity.productive;
    return true;
  });

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'file':
        return <FileText className="w-4 h-4" />;
      case 'folder':
        return <Folder className="w-4 h-4" />;
      case 'url':
        return <ExternalLink className="w-4 h-4" />;
      default:
        return <Activity className="w-4 h-4" />;
    }
  };

  const getActionColor = (action: string) => {
    switch (action) {
      case 'created':
        return 'text-green-400';
      case 'modified':
        return 'text-blue-400';
      case 'opened':
        return 'text-yellow-400';
      case 'visited':
        return 'text-purple-400';
      case 'accessed':
        return 'text-cyan-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Activity Logger</h2>
        <div className="text-sm text-gray-400">
          Real-time path and title tracking
        </div>
      </div>

      {/* Activity Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-2xl font-bold text-blue-400">247</div>
          <div className="text-sm text-gray-400">Total Activities</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-2xl font-bold text-green-400">89</div>
          <div className="text-sm text-gray-400">File Operations</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-2xl font-bold text-purple-400">158</div>
          <div className="text-sm text-gray-400">URL Visits</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-2xl font-bold text-yellow-400">7h 42m</div>
          <div className="text-sm text-gray-400">Active Time</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-2xl font-bold text-cyan-400">91%</div>
          <div className="text-sm text-gray-400">Productive</div>
        </div>
      </div>

      {/* Filter Controls */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <Filter className="w-4 h-4 text-gray-400" />
          <select 
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm"
          >
            <option value="all">All Activities</option>
            <option value="files">Files & Folders</option>
            <option value="urls">Web Activities</option>
            <option value="productive">Productive Only</option>
            <option value="non-productive">Non-productive Only</option>
          </select>
        </div>
      </div>

      {/* Activity Timeline */}
      <div className="bg-gray-800 rounded-lg border border-gray-700">
        <div className="p-6 border-b border-gray-700">
          <h3 className="text-lg font-semibold text-white">Activity Timeline</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {filteredActivities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-4 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                <div className="flex-shrink-0 mt-1">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    activity.productive ? 'bg-green-600' : 'bg-red-600'
                  }`}>
                    {getActivityIcon(activity.type)}
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-400 text-sm">{activity.timestamp}</span>
                      <span className={`text-sm font-medium ${getActionColor(activity.action)}`}>
                        {activity.action.toUpperCase()}
                      </span>
                      <span className="text-gray-400 text-sm">in {activity.application}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <Clock className="w-3 h-3" />
                      <span>{activity.duration}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="text-white font-medium">{activity.title}</div>
                    <div className="text-sm text-gray-400 font-mono bg-gray-800 px-2 py-1 rounded inline-block">
                      {activity.target}
                    </div>
                  </div>
                </div>
                
                <div className="flex-shrink-0">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    activity.productive ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'
                  }`}>
                    {activity.productive ? 'Productive' : 'Non-productive'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Path Tracking Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">Most Accessed Paths</h3>
          <div className="space-y-3">
            {[
              { path: '/home/user/projects/webapp/src/', count: 47, type: 'folder' },
              { path: 'github.com/microsoft/', count: 23, type: 'url' },
              { path: '/home/user/documents/', count: 18, type: 'folder' },
              { path: 'stackoverflow.com/questions/', count: 15, type: 'url' },
              { path: '/home/user/downloads/', count: 12, type: 'folder' }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                <div className="flex items-center space-x-3">
                  {item.type === 'folder' ? 
                    <Folder className="w-4 h-4 text-yellow-400" /> : 
                    <ExternalLink className="w-4 h-4 text-blue-400" />
                  }
                  <span className="text-white text-sm font-mono">{item.path}</span>
                </div>
                <span className="text-gray-400 text-sm">{item.count} times</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">Activity Patterns</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
              <div>
                <div className="text-white font-medium">Peak Activity Hour</div>
                <div className="text-gray-400 text-sm">Most file operations</div>
              </div>
              <div className="text-blue-400 font-bold">2:00 PM</div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
              <div>
                <div className="text-white font-medium">Average Session Length</div>
                <div className="text-gray-400 text-sm">Per path/title</div>
              </div>
              <div className="text-green-400 font-bold">8m 32s</div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
              <div>
                <div className="text-white font-medium">Context Switches</div>
                <div className="text-gray-400 text-sm">Between different paths</div>
              </div>
              <div className="text-yellow-400 font-bold">34</div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
              <div>
                <div className="text-white font-medium">File Type Preference</div>
                <div className="text-gray-400 text-sm">Most accessed extension</div>
              </div>
              <div className="text-purple-400 font-bold">.tsx</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityLogger;