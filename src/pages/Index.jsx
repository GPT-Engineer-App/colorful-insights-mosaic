import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { User, Code, Target, Puzzle, Star, TrendingUp, Users, Calendar, Sun, Moon, Clock } from 'lucide-react';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const skillData = [
  { name: 'AI', value: 90 },
  { name: 'Software Dev', value: 85 },
  { name: 'Project Mgmt', value: 70 },
  { name: 'Business Dev', value: 65 },
  { name: 'Communication', value: 80 },
];

const projectData = [
  { name: 'AI Automation', value: 40 },
  { name: 'On-premise AI', value: 30 },
  { name: 'Community Tools', value: 20 },
  { name: 'Other', value: 10 },
];

const growthData = [
  { month: 'Jan', clients: 2 },
  { month: 'Feb', clients: 3 },
  { month: 'Mar', clients: 4 },
  { month: 'Apr', clients: 6 },
  { month: 'May', clients: 8 },
  { month: 'Jun', clients: 10 },
  { month: 'Jul', clients: 13 },
];

const timelineData = [
  { date: '2019', event: 'Graduated from Codam College' },
  { date: '2020', event: 'Started as Junior Software Engineer' },
  { date: '2021', event: 'Promoted to Senior Software Engineer' },
  { date: '2022', event: 'Co-founded Veloxforce' },
  { date: '2023', event: 'Launched first AI product' },
  { date: '2024', event: 'Expanded client base to 20+ companies' },
];

const MariusInteractiveDashboard = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const [isProfileExpanded, setIsProfileExpanded] = useState(false);

  const renderSection = () => {
    switch(activeSection) {
      case 'skills':
        return (
          <div className={`animate-fade-in ${isDarkMode ? 'text-white' : ''}`}>
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Code className="mr-2" /> Skills Breakdown
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={skillData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill={isDarkMode ? "#8884d8" : "#82ca9d"}>
                  {skillData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        );
      case 'projects':
        return (
          <div className={`animate-fade-in ${isDarkMode ? 'text-white' : ''}`}>
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Puzzle className="mr-2" /> Project Distribution
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={projectData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {projectData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        );
      case 'growth':
        return (
          <div className={`animate-fade-in ${isDarkMode ? 'text-white' : ''}`}>
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <TrendingUp className="mr-2" /> Client Growth
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={growthData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="clients" stroke={isDarkMode ? "#82ca9d" : "#8884d8"} strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        );
      case 'timeline':
        return (
          <div className={`animate-fade-in ${isDarkMode ? 'text-white' : ''}`}>
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Clock className="mr-2" /> Career Timeline
            </h2>
            <div className="relative">
              {timelineData.map((item, index) => (
                <div key={index} className="mb-4 flex items-start">
                  <div className={`w-24 font-bold ${isDarkMode ? 'text-purple-300' : 'text-purple-600'}`}>{item.date}</div>
                  <div className={`flex-1 ml-4 p-2 rounded ${isDarkMode ? 'bg-gray-700' : 'bg-purple-100'}`}>
                    {item.event}
                  </div>
                </div>
              ))}
              <div className={`absolute left-[23px] top-0 bottom-0 w-0.5 ${isDarkMode ? 'bg-purple-300' : 'bg-purple-600'}`}></div>
            </div>
          </div>
        );
      default:
        return (
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in ${isDarkMode ? 'text-white' : ''}`}>
            <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-purple-100'}`}>
              <h2 className="text-xl font-semibold mb-2 flex items-center">
                <Target className="mr-2" /> Business Goals
              </h2>
              <ul className="list-disc list-inside">
                <li>Transition to project management</li>
                <li>Build partnerships with sales professionals</li>
                <li>Develop AI-driven retention strategies</li>
              </ul>
            </div>
            <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-yellow-100'}`}>
              <h2 className="text-xl font-semibold mb-2 flex items-center">
                <Star className="mr-2" /> AI Technologies
              </h2>
              <div className="flex flex-wrap gap-2">
                {['LLMs', 'AI Chatbots', 'Automation tools', 'Python', 'Cloud technologies'].map((tech, index) => (
                  <span key={index} className={`px-2 py-1 rounded-full text-sm ${isDarkMode ? 'bg-gray-600 text-white' : 'bg-white'}`}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className={`p-6 rounded-lg shadow-lg max-w-4xl mx-auto ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}>
      <div className="flex justify-between items-center mb-6">
        <h1 className={`text-3xl font-bold ${isDarkMode ? 'text-purple-300' : 'text-purple-600'}`}>Marius Wilsch - Professional Dashboard</h1>
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`p-2 rounded-full ${isDarkMode ? 'bg-yellow-400 text-gray-800' : 'bg-gray-800 text-yellow-400'}`}
        >
          {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </div>
      
      <div className={`p-4 rounded-lg mb-6 transition-all duration-300 ${isProfileExpanded ? 'h-auto' : 'h-24 overflow-hidden'} ${isDarkMode ? 'bg-gray-700' : 'bg-blue-100'}`}>
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-semibold mb-2 flex items-center">
              <User className="mr-2" /> Profile Snapshot
            </h2>
            <p><strong>Role:</strong> Software Engineer & Co-Founder at Veloxforce</p>
            <p><strong>Location:</strong> Munich, Germany</p>
            <p><strong>Email:</strong> m.wilsch@veloxforce.com</p>
          </div>
          <button 
            onClick={() => setIsProfileExpanded(!isProfileExpanded)}
            className={`px-2 py-1 rounded ${isDarkMode ? 'bg-purple-500 text-white hover:bg-purple-600' : 'bg-blue-500 text-white hover:bg-blue-600'} transition-colors`}
          >
            {isProfileExpanded ? 'Show Less' : 'Show More'}
          </button>
        </div>
        {isProfileExpanded && (
          <div className="mt-4 animate-fade-in">
            <p><strong>Experience:</strong> 5+ years in software development</p>
            <p><strong>Education:</strong> Computer Software Engineering, Codam College</p>
            <p><strong>Languages:</strong> German (native), English (fluent)</p>
          </div>
        )}
      </div>
      
      <div className="flex justify-center space-x-4 mb-6">
        {['overview', 'skills', 'projects', 'growth', 'timeline'].map((section) => (
          <button 
            key={section}
            onClick={() => setActiveSection(section)}
            className={`px-4 py-2 rounded ${
              activeSection === section
                ? isDarkMode ? 'bg-purple-500 text-white' : 'bg-purple-600 text-white'
                : isDarkMode ? 'bg-gray-600 text-white' : 'bg-gray-200'
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </div>
      
      {renderSection()}
      
      <div className="mt-8 text-center">
        <h2 className="text-xl font-semibold mb-2 flex items-center justify-center">
          <Users className="mr-2" /> AAA Community Engagement
        </h2>
        <div className={`bg-green-200 rounded-full h-4 w-full max-w-md mx-auto ${isDarkMode ? 'bg-green-800' : ''}`}>
          <div 
            className="bg-green-500 rounded-full h-full transition-all duration-1000" 
            style={{width: '75%'}}
          ></div>
        </div>
        <p className="mt-2">75% - Active Contributor</p>
      </div>
      
      <div className={`text-center text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mt-8`}>
        Data last updated: July 2024 | Created with 🤖💡 by AAA AI
      </div>
    </div>
  );
};

export default MariusInteractiveDashboard;
