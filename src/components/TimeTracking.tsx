import React from 'react';
import { Play, Pause, Square, Clock, TrendingUp, Calendar } from 'lucide-react';

const TimeTracking = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Automatic Time Tracking</h2>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-green-400 text-sm">Currently Tracking</span>
        </div>
      </div>

      {/* Live Timer */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-white mb-2">Today's Work Session</h3>
          <div className="text-4xl font-bold text-blue-400 mb-4">07:42:18</div>
          <div className="flex justify-center space-x-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">6h 54m</div>
              <div className="text-sm text-gray-400">Productive</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">48m</div>
              <div className="text-sm text-gray-400">Non-productive</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-400">32m</div>
              <div className="text-sm text-gray-400">Idle</div>
            </div>
          </div>
        </div>
      </div>

      {/* Time Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">Weekly Overview</h3>
          <div className="space-y-3">
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day, index) => {
              const totalHours = Math.floor(Math.random() * 3) + 7;
              const productiveHours = Math.floor(totalHours * (0.8 + Math.random() * 0.2));
              const productivity = Math.floor((productiveHours / totalHours) * 100);
              
              return (
                <div key={day} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">{day}</span>
                    <span className="text-white font-semibold">{totalHours}h {Math.floor(Math.random() * 60)}m</span>
                  </div>
                  <div className="flex space-x-1 h-2">
                    <div 
                      className="bg-green-500 rounded-full"
                      style={{ width: `${productivity}%` }}
                    ></div>
                    <div 
                      className="bg-yellow-500 rounded-full"
                      style={{ width: `${100 - productivity}%` }}
                    ></div>
                  </div>
                  <div className="text-right text-sm text-gray-400">{productivity}% productive</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">Time Categories</h3>
          <div className="space-y-4">
            {[
              { category: 'Development', time: '4h 23m', percentage: 56, color: 'bg-blue-500' },
              { category: 'Communication', time: '1h 45m', percentage: 23, color: 'bg-green-500' },
              { category: 'Planning', time: '52m', percentage: 11, color: 'bg-purple-500' },
              { category: 'Breaks', time: '42m', percentage: 10, color: 'bg-gray-500' },
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">{item.category}</span>
                  <span className="text-white font-semibold">{item.time}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className={`${item.color} h-2 rounded-full transition-all duration-500`}
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Automatic Tracking Settings */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-semibold text-white mb-4">Automatic Tracking Configuration</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="text-sm text-gray-400">Idle Detection Time</label>
            <select className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white">
              <option>3 minutes</option>
              <option>5 minutes</option>
              <option>10 minutes</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm text-gray-400">Auto Start/Stop</label>
            <div className="flex items-center space-x-3">
              <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">Enabled</button>
              <span className="text-gray-300 text-sm">Tracks when computer is active</span>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm text-gray-400">Productivity Learning</label>
            <div className="flex items-center space-x-3">
              <button className="bg-green-600 text-white px-3 py-1 rounded text-sm">AI Active</button>
              <span className="text-gray-300 text-sm">Adapting to your patterns</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeTracking;