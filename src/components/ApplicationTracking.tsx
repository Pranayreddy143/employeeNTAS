import React from 'react';
import { Monitor, Clock, TrendingUp, BarChart3 } from 'lucide-react';

const ApplicationTracking = () => {
  const applications = [
    { name: 'Visual Studio Code', category: 'Development', time: '3h 12m', usage: 85, icon: '💻', productive: true },
    { name: 'Google Chrome', category: 'Web Browser', time: '2h 34m', usage: 68, icon: '🌐', productive: true },
    { name: 'Slack', category: 'Communication', time: '1h 45m', usage: 47, icon: '💬', productive: true },
    { name: 'Figma', category: 'Design', time: '1h 23m', usage: 35, icon: '🎨', productive: true },
    { name: 'Spotify', category: 'Entertainment', time: '4h 15m', usage: 95, icon: '🎵', productive: false },
    { name: 'Discord', category: 'Communication', time: '45m', usage: 20, icon: '🎮', productive: false },
    { name: 'Microsoft Excel', category: 'Productivity', time: '42m', usage: 18, icon: '📊', productive: true },
    { name: 'YouTube', category: 'Entertainment', time: '32m', usage: 12, icon: '📺', productive: false },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Application Usage Tracking</h2>
        <div className="text-sm text-gray-400">
          Real-time application monitoring and categorization
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-2xl font-bold text-blue-400">23</div>
          <div className="text-sm text-gray-400">Total Applications</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-2xl font-bold text-green-400">18</div>
          <div className="text-sm text-gray-400">Productive Apps</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-2xl font-bold text-white">7h 42m</div>
          <div className="text-sm text-gray-400">Total Usage Time</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-2xl font-bold text-purple-400">87%</div>
          <div className="text-sm text-gray-400">Productive Usage</div>
        </div>
      </div>

      {/* Application List */}
      <div className="bg-gray-800 rounded-lg border border-gray-700">
        <div className="p-6 border-b border-gray-700">
          <h3 className="text-lg font-semibold text-white">Application Usage Details</h3>
        </div>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-gray-700">
                  <th className="text-gray-400 font-medium pb-3">Application</th>
                  <th className="text-gray-400 font-medium pb-3">Category</th>
                  <th className="text-gray-400 font-medium pb-3">Time Used</th>
                  <th className="text-gray-400 font-medium pb-3">Usage %</th>
                  <th className="text-gray-400 font-medium pb-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {applications.map((app, index) => (
                  <tr key={index} className="hover:bg-gray-700 transition-colors">
                    <td className="py-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{app.icon}</span>
                        <div>
                          <div className="text-white font-medium">{app.name}</div>
                          <div className="text-xs text-gray-400">Last used: 2 minutes ago</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        app.category === 'Development' ? 'bg-blue-900 text-blue-300' :
                        app.category === 'Communication' ? 'bg-green-900 text-green-300' :
                        app.category === 'Design' ? 'bg-purple-900 text-purple-300' :
                        app.category === 'Productivity' ? 'bg-yellow-900 text-yellow-300' :
                        app.category === 'Web Browser' ? 'bg-cyan-900 text-cyan-300' :
                        'bg-red-900 text-red-300'
                      }`}>
                        {app.category}
                      </span>
                    </td>
                    <td className="py-4 text-white font-medium">{app.time}</td>
                    <td className="py-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-700 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${app.productive ? 'bg-blue-500' : 'bg-red-500'}`}
                            style={{ width: `${app.usage}%` }}
                          ></div>
                        </div>
                        <span className="text-white text-sm">{app.usage}%</span>
                      </div>
                    </td>
                    <td className="py-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        app.productive ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'
                      }`}>
                        {app.productive ? 'Productive' : 'Non-productive'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Usage Patterns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">Most Used Categories</h3>
          <div className="space-y-4">
            {[
              { category: 'Development', percentage: 42, time: '3h 12m', color: 'bg-blue-500' },
              { category: 'Web Browser', percentage: 33, time: '2h 34m', color: 'bg-cyan-500' },
              { category: 'Communication', percentage: 18, time: '1h 25m', color: 'bg-green-500' },
              { category: 'Design', percentage: 7, time: '32m', color: 'bg-purple-500' },
            ].map((cat, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-300">{cat.category}</span>
                  <span className="text-white font-medium">{cat.time}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className={`${cat.color} h-2 rounded-full transition-all duration-500`}
                    style={{ width: `${cat.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">Usage Trends</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
              <div>
                <div className="text-white font-medium">Peak Usage Hour</div>
                <div className="text-gray-400 text-sm">2:00 PM - 3:00 PM</div>
              </div>
              <div className="text-blue-400 font-bold">94%</div>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
              <div>
                <div className="text-white font-medium">Average Session Length</div>
                <div className="text-gray-400 text-sm">Per application</div>
              </div>
              <div className="text-green-400 font-bold">23m</div>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
              <div>
                <div className="text-white font-medium">Context Switches</div>
                <div className="text-gray-400 text-sm">Between applications</div>
              </div>
              <div className="text-yellow-400 font-bold">47</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationTracking;