import { useState } from 'react';
import { Button } from "antd";
import { Figma, Diamond, FileText } from 'lucide-react';

type TabContent = {
  title: string;
  description: string;
}

type WorkContent = {
  [key: string]: TabContent;
}

type RoleContent = {
  [key: string]: string[];
}

const Building = () => {
  const [activeTab1, setActiveTab1] = useState('Brainstorming');
  const [activeTab2, setActiveTab2] = useState('UX & Design');

  const workButtons = [
    "Brainstorming", "Diagramming", "Meetings & Workshops",
    "Scrum Events", "Mapping", "Research & Design", "Strategic Planning"
  ];

  const roleButtons = [
    "UX & Design", "Marketing", "Product Management",
    "Engineering", "Consultants", "Agile Coaches", "Sales"
  ];

  const workContent: WorkContent = {
    'Brainstorming': {
      title: 'Brainstorming',
      description: 'Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos, drawing capabilities - the list goes on'
    },
    'Diagramming': {
      title: 'Diagramming',
      description: 'Create professional diagrams and visualizations with our intuitive tools and extensive shape library'
    },
    'Meetings & Workshops': {
      title: 'Meetings & Workshops',
      description: 'Facilitate engaging virtual meetings and workshops with real-time collaboration tools'
    },
    'Scrum Events': {
      title: 'Scrum Events',
      description: 'Run effective sprint planning, retrospectives, and daily standups with specialized templates'
    },
    'Mapping': {
      title: 'Mapping',
      description: 'Create mind maps, user journey maps, and process flows to visualize complex information'
    },
    'Research & Design': {
      title: 'Research & Design',
      description: 'Conduct user research, create wireframes, and design prototypes all in one collaborative space'
    },
    'Strategic Planning': {
      title: 'Strategic Planning',
      description: 'Develop and share strategic plans with customizable templates and real-time collaboration'
    }
  };

  const roleContent: RoleContent = {
    'UX & Design': [
      'Build low-fi wireframes',
      'Involve stakeholders in the design process',
      'Run engaging design workshops'
    ],
    'Marketing': [
      'Plan and execute campaigns',
      'Create visual marketing materials',
      'Track campaign performance'
    ],
    'Product Management': [
      'Define product roadmap',
      'Prioritize features and backlog',
      'Coordinate with development teams'
    ],
    'Engineering': [
      'Technical documentation',
      'Sprint planning and tracking',
      'Architecture diagrams'
    ],
    'Consultants': [
      'Client presentations',
      'Project planning',
      'Stakeholder management'
    ],
    'Agile Coaches': [
      'Team retrospectives',
      'Sprint ceremonies',
      'Agile training materials'
    ],
    'Sales': [
      'Sales pipeline tracking',
      'Client presentations',
      'Territory planning'
    ]
  };

  const CheckmarkSVG = () => (
    <svg 
      width="20" 
      height="20" 
      viewBox="0 0 20 20" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
      <circle cx="10" cy="10" r="10" fill="#1D4ED8" />
      <path 
        d="M14.5 7L8.5 13L5.5 10" 
        stroke="white" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* First Section */}
      <section className="mb-24">
        <h1 className="text-4xl font-bold text-center mb-12">Built for the way you work</h1>
        
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {workButtons.map((text) => (
            <Button
              key={text}
              className={`px-6 py-2 rounded-full ${
                activeTab1 === text 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab1(text)}
            >
              {text}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">{workContent[activeTab1].title}</h2>
            <p className="text-gray-600 text-lg">
              {workContent[activeTab1].description}
            </p>
            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium inline-block">
              Learn more →
            </a>
          </div>
          <div className="bg-gray-100 rounded-lg aspect-video">
            <img src="/api/placeholder/600/400" alt={activeTab1} className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section>
        <h1 className="text-4xl font-bold text-center mb-12">Built for every team</h1>
        
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {roleButtons.map((text) => (
            <Button
              key={text}
              className={`px-6 py-2 rounded-full ${
                activeTab2 === text 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab2(text)}
            >
              {text}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              {roleContent[activeTab2].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckmarkSVG />
                  <p className="text-lg font-medium">{item}</p>
                </div>
              ))}
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium inline-block mt-4">
                Learn more →
              </a>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="font-medium mb-4">Integrate your favorite tools</p>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center">
                  <FileText className="text-gray-600" />
                </div>
                <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center">
                  <Figma className="text-gray-600" />
                </div>
                <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center">
                  <FileText className="text-gray-600" />
                </div>
                <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center">
                  <Diamond className="text-gray-600" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-100 rounded-lg aspect-video">
            <img src="/api/placeholder/600/400" alt={activeTab2} className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Building;