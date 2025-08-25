import React, { useState } from 'react';
import { Monitor, Clock, BarChart3, Activity, Globe, Camera, Settings, Users, TrendingUp, Calendar } from 'lucide-react';
import Dashboard from './components/Dashboard';
import TimeTracking from './components/TimeTracking';
import ApplicationTracking from './components/ApplicationTracking';
import URLTracking from './components/URLTracking';
import Screenshots from './components/Screenshots';
import ActivityLogger from './components/ActivityLogger';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'time-tracking', label: 'Time Tracking', icon: Clock },
    { id: 'applications', label: 'Applications', icon: Monitor },
    { id: 'urls', label: 'Web Activity', icon: Globe },
    { id: 'activity', label: 'Activity Logger', icon: Activity },
    { id: 'screenshots', label: 'Screenshots', icon: Camera },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'time-tracking':
        return <TimeTracking />;
      case 'applications':
        return <ApplicationTracking />;
      case 'urls':
        return <URLTracking />;
      case 'activity':
        return <ActivityLogger />;
      case 'screenshots':
        return <Screenshots />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Monitor className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-white">WorkTracker Pro</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Users className="w-4 h-4" />
              <span>12 Active Users</span>
            </div>
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <nav className="w-64 bg-gray-800 border-r border-gray-700 min-h-screen">
          <div className="p-4">
            <div className="space-y-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === tab.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;