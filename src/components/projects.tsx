import irrigation from "../assets/irrigation6.png"
import robot from "../assets/robot.png"
import parking from "../assets/parking2.png"
import NavBar from "./nav";

const ExploreProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Self-Balancing Robot",
      image: robot,
      category: "Robotics & Control Systems",
      duration: "1-2 months",
      teamSize: "5-8 members",
      difficulty: "Intermediate",
      description: "Build an autonomous self-balancing robot that uses gyroscope sensors and accelerometers to maintain equilibrium. This project involves implementing PID control algorithms, sensor fusion, and real-time processing.",
      whatYoullLearn: [
        "PID controller design and tuning",
        "Sensor integration and calibration",
        "Arduino/Raspberry Pi programming",
        "Control system theory application",
        "Circuit design and PCB development"
      ],
      requirements: [
        "Basic understanding of programming (C/C++ or Python)",
        "Interest in control systems and robotics",
        "Commitment to weekly team meetings",
        "Willingness to learn and experiment"
      ],
      technologies: ["Arduino", "MPU6050", "Motor Drivers", "C++", "PID Control"],
      deadline: "20 Oct 2025"
    },
    {
      id: 2,
      title: "Solar-Powered Smart Irrigation",
      image: irrigation,
      category: "Mechanical Energy Engineering & Green Tech",
      duration: "1-2 months",
      teamSize: "5-8 members",
      difficulty: "Intermediate",
      description: "This project aims to design a simple, automated irrigation system powered by solar energy to support sustainable farming. It combines renewable energy, sensors, and water management to create efficient and eco-friendly solutions.",
      whatYoullLearn: [
        "Basics of solar energy systems",
        "Automation and IoT in agriculture",
        "Use of soil moisture sensors and control logic",
        "Water management systems design",
        "Integration of renewable energy with smart devices"
      ],
      requirements: [
        "Interest in renewable energy or smart farming",
        "Basic electronics or programming skills are a plus",
        "Willingness to work outdoors for testing (optional)",
        "Team spirit and reliability"
      ],
      technologies: ["Solar panels", "Water pumps", "Arduino", "Sensors"],
      deadline: "20 Oct 2025"
    },
    {
      id: 3,
      title: "Automated Multilevel Parking System",
      image: parking,
      category: "Mechanical Engineering and Design",
      duration: "1-2 months",
      teamSize: "5-8 members",
      difficulty: "Intermediate",
      description: "This project focuses on designing a compact and efficient parking structure to maximize space in crowded urban areas. It involves mechanical design, automation, and practical problem-solving. Join us to bring innovative parking solutions to life!",
      whatYoullLearn: [
        "Mechanical power transmission",
        "Hydraulic systems design",
        "Teamwork and project planning",
        "Prototype fabrication and testing",
        "Mechanical design for balance and structure"
      ],
      requirements: [
        "Interest in mechatronics or robotics",
        "Time commitment for testing and troubleshooting",
        "Hands-on fabrication skills or willingness to learn",
        "Basic knowledge of electronics or programming is a plus"
      ],
      technologies: ["Arduino", "Mechanical Systems", "CAD", "Prototyping", "3D printing"],
      deadline: "20 Oct 2025"
    }
  ];

  const getDifficultyColor = (difficulty:any) => {
    switch(difficulty) {
      case "Beginner to Intermediate":
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800";
      case "Advanced":
        return "bg-red-100 text-red-800";
      default:
        return "bg-green-100 text-green-800";
    }
  };

  return (
  <>
  <NavBar></NavBar>
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Explore Our Projects</h1>
          <p className="text-xl text-indigo-100 max-w-3xl">
            Join our ongoing engineering projects and gain hands-on experience. Work with talented peers, learn from industry mentors, and build something amazing.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image Section */}
                  <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getDifficultyColor(project.difficulty)}`}>
                        {project.difficulty}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`p-8 lg:p-10 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="mb-4">
                      <span className="text-indigo-800 font-semibold text-sm uppercase tracking-wide">
                        {project.category}
                      </span>
                      <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-3">
                        {project.title}
                      </h2>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {project.duration}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          {project.teamSize}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">What You'll Learn</h3>
                      <ul className="space-y-2">
                        {project.whatYoullLearn.map((item, i) => (
                          <li key={i} className="flex items-start text-gray-700">
                            <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Requirements</h3>
                      <ul className="space-y-2">
                        {project.requirements.map((item, i) => (
                          <li key={i} className="flex items-start text-gray-700">
                            <svg className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-red-100 text-indigo-700 rounded-full text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
                      Apply for This Project
                    </button> */}
                    <div>
                          <span className="px-3 py-1 bg-yellow-100 text-red-500 rounded-full text-sm font-medium">
                           Deadline: {project.deadline}
                          </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-indigo-100 mb-6">
            ready to turn ideas into real engineering solutions? Join one of our exciting hands-on projects now.
          </p>
          <button 
           onClick={() => window.location.href = `https://forms.office.com/r/gAT0LMyTeD?origin=lprLink`}
          className="bg-white text-red-600 hover:bg-red-800 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
            Apply Now
          </button>
        </div>
      </section>
    </div>
      </>
  );
};

export default ExploreProjects;