import React from 'react';
import { Clock, Monitor, Globe, TrendingUp, Calendar, Users, Target, Award } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Employee Monitoring Dashboard</h2>
        <div className="flex items-center space-x-2 text-sm text-gray-300">
          <Calendar className="w-4 h-4" />
          <span>Today, March 15, 2024</span>
        </div>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Active Time</p>
              <p className="text-2xl font-bold text-white">7h 42m</p>
              <p className="text-green-400 text-xs flex items-center mt-1">
                <TrendingUp className="w-3 h-3 mr-1" />
                +12% from yesterday
              </p>
            </div>
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Productivity Score</p>
              <p className="text-2xl font-bold text-white">87%</p>
              <p className="text-green-400 text-xs flex items-center mt-1">
                <TrendingUp className="w-3 h-3 mr-1" />
                +5% from yesterday
              </p>
            </div>
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Apps Used</p>
              <p className="text-2xl font-bold text-white">23</p>
              <p className="text-blue-400 text-xs flex items-center mt-1">
                <Monitor className="w-3 h-3 mr-1" />
                Most: VS Code (3h 12m)
              </p>
            </div>
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
              <Monitor className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Websites Visited</p>
              <p className="text-2xl font-bold text-white">47</p>
              <p className="text-orange-400 text-xs flex items-center mt-1">
                <Globe className="w-3 h-3 mr-1" />
                85% work-related
              </p>
            </div>
            <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Activity Chart */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-semibold text-white mb-4">Today's Activity Timeline</h3>
        <div className="h-64 flex items-end space-x-2">
          {Array.from({ length: 12 }, (_, i) => {
            const height = Math.random() * 100 + 20;
            const isProductive = Math.random() > 0.3;
            return (
              <div key={i} className="flex-1 flex flex-col items-center">
                <div
                  className={`w-full rounded-t transition-all duration-500 ${
                    isProductive ? 'bg-blue-600' : 'bg-gray-600'
                  }`}
                  style={{ height: `${height}%` }}
                ></div>
                <span className="text-xs text-gray-400 mt-2">
                  {9 + i}:00
                </span>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center mt-4 space-x-6 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-600 rounded"></div>
            <span className="text-gray-300">Productive Time</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gray-600 rounded"></div>
            <span className="text-gray-300">Non-productive Time</span>
          </div>
        </div>
      </div>

      {/* Team Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">Top Performers</h3>
          <div className="space-y-4">
            {[
              { name: 'Sarah Johnson', score: 94, time: '8h 15m' },
              { name: 'Mike Chen', score: 91, time: '7h 58m' },
              { name: 'Lisa Rodriguez', score: 89, time: '8h 02m' },
              { name: 'David Kim', score: 87, time: '7h 42m' },
            ].map((user, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${
                    index === 0 ? 'bg-yellow-600' : index === 1 ? 'bg-gray-500' : index === 2 ? 'bg-orange-600' : 'bg-blue-600'
                  }`}>
                    {index + 1}
                  </div>
                  <span className="text-white font-medium">{user.name}</span>
                </div>
                <div className="text-right">
                  <div className="text-green-400 font-semibold">{user.score}%</div>
                  <div className="text-gray-400 text-sm">{user.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {[
              { time: '14:32', action: 'VS Code opened', user: 'Sarah J.', type: 'productive' },
              { time: '14:28', action: 'Screenshot captured', user: 'Mike C.', type: 'system' },
              { time: '14:25', action: 'Break time ended', user: 'Lisa R.', type: 'time' },
              { time: '14:20', action: 'YouTube.com visited', user: 'David K.', type: 'warning' },
              { time: '14:18', action: 'Slack conversation', user: 'Sarah J.', type: 'productive' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-3 p-2">
                <div className={`w-2 h-2 rounded-full ${
                  activity.type === 'productive' ? 'bg-green-400' :
                  activity.type === 'warning' ? 'bg-yellow-400' :
                  activity.type === 'system' ? 'bg-blue-400' : 'bg-gray-400'
                }`}></div>
                <span className="text-gray-400 text-sm w-12">{activity.time}</span>
                <span className="text-white text-sm flex-1">{activity.action}</span>
                <span className="text-gray-400 text-sm">{activity.user}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;