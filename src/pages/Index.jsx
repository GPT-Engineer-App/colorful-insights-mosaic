import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { User, Code, Target, Puzzle, Star, TrendingUp, Users, Calendar, Sun, Moon, Clock, Briefcase, GraduationCap, Globe, Mail, Linkedin, MapPin } from 'lucide-react';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

const skillData = [
  { name: 'AI & ML', value: 95 },
  { name: 'Software Dev', value: 90 },
  { name: 'Project Mgmt', value: 85 },
  { name: 'Business Dev', value: 65 },
  { name: 'Communication', value: 87 },
  { name: 'Problem Solving', value: 93 },
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

const projectMetrics = [
  { subject: 'Efficiency', A: 120, B: 110, fullMark: 150 },
  { subject: 'Scalability', A: 98, B: 75, fullMark: 150 },
  { subject: 'Cost Savings', A: 86, B: 90, fullMark: 150 },
  { subject: 'Accuracy', A: 99, B: 115, fullMark: 150 },
  { subject: 'User Satisfaction', A: 85, B: 95, fullMark: 150 },
  { subject: 'Implementation Speed', A: 65, B: 80, fullMark: 150 },
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
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">Additional Skills</h3>
              <div className="flex flex-wrap gap-2">
                {["Requirements Analysis", "Systems Engineering", "SQL", "Node.js", "C++", "Product Development"].map((skill, index) => (
                  <span key={index} className={`px-2 py-1 rounded-full text-sm ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200'}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      case 'projects':
        return (
          <div className={`animate-fade-in ${isDarkMode ? 'text-white' : ''}`}>
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Puzzle className="mr-2" /> Project Distribution
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              <div>
                <h3 className="text-xl font-semibold mb-2">Key Projects</h3>
                <ul className="list-disc list-inside">
                  <li>AI-powered automation solutions</li>
                  <li>On-premise AI system for lawyers</li>
                  <li>Community-focused AI tools</li>
                </ul>
                <h3 className="text-xl font-semibold mt-4 mb-2">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {['LLMs', 'AI Chatbots', 'Automation tools', 'Python', 'Cloud technologies', 'Natural Language Processing'].map((tech, index) => (
                    <span key={index} className={`px-2 py-1 rounded-full text-sm ${isDarkMode ? 'bg-gray-600 text-white' : 'bg-gray-200'}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
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
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">Growth Highlights</h3>
              <ul className="list-disc list-inside">
                <li>Expanded client base to 20+ companies</li>
                <li>Launched first AI product in 2023</li>
                <li>Consistent month-over-month growth</li>
              </ul>
            </div>
          </div>
        );
      case 'timeline':
        return (
          <div className={`animate-fade-in ${isDarkMode ? 'text-white' : ''}`}>
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <Clock className="mr-2" /> Career Timeline
            </h2>
            <div className="space-y-8">
              {timelineData.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className={`flex-shrink-0 w-20 text-right font-bold ${isDarkMode ? 'text-purple-300' : 'text-purple-600'}`}>
                    {item.date}
                  </div>
                  <div className={`w-3 h-3 rounded-full ${isDarkMode ? 'bg-purple-400' : 'bg-purple-500'}`}></div>
                  <div className={`flex-grow p-3 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-purple-50'}`}>
                    {item.event}
                  </div>
                </div>
              ))}
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
                <li>Focus on project management and coding</li>
              </ul>
            </div>
            <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-yellow-100'}`}>
              <h2 className="text-xl font-semibold mb-2 flex items-center">
                <Star className="mr-2" /> AI Technologies
              </h2>
              <div className="flex flex-wrap gap-2">
                {['LLMs', 'AI Chatbots', 'Automation tools', 'Python', 'Cloud technologies', 'Natural Language Processing'].map((tech, index) => (
                  <span key={index} className={`px-2 py-1 rounded-full text-sm ${isDarkMode ? 'bg-gray-600 text-white' : 'bg-white'}`}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-green-100'} md:col-span-2`}>
              <h2 className="text-xl font-semibold mb-2 flex items-center">
                <Briefcase className="mr-2" /> Company Overview
              </h2>
              <p><strong>Veloxforce:</strong> We help businesses remove their pressing pain points by installing an `AI-workforce` that works 24/7</p>
              <div className="mt-2">
                <p><strong>Team Size:</strong> 2 co-founders, planning to hire developers</p>
                <p><strong>Funding Status:</strong> Bootstrapped</p>
                <p><strong>Tech Stack:</strong> Python, AI/ML frameworks, Cloud technologies</p>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="flex items-center">
                <Briefcase className="w-4 h-4 mr-2" />
                <p>Software Engineer & Co-Founder at Veloxforce</p>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <p>Munich, Germany</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:m.wilsch@veloxforce.com" className="text-blue-500 hover:underline">m.wilsch@veloxforce.com</a>
              </div>
              <div className="flex items-center">
                <Linkedin className="w-4 h-4 mr-2" />
                <a href="https://www.linkedin.com/in/marius-wilsch/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LinkedIn Profile</a>
              </div>
            </div>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="flex items-center">
                <Briefcase className="w-4 h-4 mr-2" />
                <p><strong>Experience:</strong> 5+ years in software development</p>
              </div>
              <div className="flex items-center">
                <GraduationCap className="w-4 h-4 mr-2" />
                <p><strong>Education:</strong> Computer Software Engineering, Codam College</p>
              </div>
              <div className="flex items-center">
                <Globe className="w-4 h-4 mr-2" />
                <p><strong>Languages:</strong> German (native), English (fluent)</p>
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-2" />
                <p><strong>Interests:</strong> AI development, business development, programming</p>
              </div>
            </div>
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
