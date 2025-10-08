import { useState } from 'react';

// Import images (you'll need to adjust paths based on your structure)
import irrigation from "../assets/irrigation.jpeg"
import robot from "../assets/robot.png"
import parking from "../assets/parking.jpg"

const Collaborate = () => {
  const [showDetails] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Self-Balancing Robot",
      image: robot,
      description: "An autonomous self-balancing robot using gyroscope sensors and PID control algorithms to maintain stability."
    },
    {
      id: 2,
      title: "Automated Multilevel Parking System",
      image: parking,
      description: "designing a compact and efficient parking structure to maximize space in crowded urban areas. It involves mechanical design and automation"
    },
    {
      id: 3,
      title: "Solar-Powered Smart Irrigation",
      image: irrigation,
      description: "Sustainable water pumping solution using human-powered pedal mechanism for rural communities."
    }
  ];

  return (
    <section className="py-12 bg-gray min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-left" id='projects'>
          <h2 className="text-4xl font-bold text-gray-800">Current Projects</h2>
          {/* <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our innovative engineering projects that combine creativity, technology, and practical solutions
          </p> */}
        </div>

        {/* Projects Container */}
        <div className=" rounded-2xl shadow-lg p-8 border border-gray-200">
          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="h-48 relative overflow-hidden bg-gray-100">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg">{project.title}</h3>
                  <div className="flex items-center justify-between">
                                        <div>
                                                <span className="px-3 py-1 bg-indigo-100 text-red-500 rounded-full text-sm font-medium">
                           Deadline: 20 Oct 2025
                          </span>
                    </div>
                    <button 
                      onClick={() => window.location.href = `/projects`}
                      className="text-sm text-red-600 hover:text-red-800 font-medium transition-colors duration-200"
                    >
                      EXPLORE →
                    </button>
                  </div>
                  
                  {/* Expandable Details */}
                                    
                  {/* Expandable Details */}
                  {showDetails === project.id && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center pt-6 border-t border-gray-200">
            <button 
            onClick={() => window.location.href = `https://forms.office.com/r/gAT0LMyTeD?origin=lprLink`}
            className="bg-red-500 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 shadow-md hover:shadow-lg">
              Apply now
            </button>
            <p className="text-sm text-gray-500 mt-3">
              Discover more innovative projects and opportunities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaborate;