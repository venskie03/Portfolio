export default function Projects() {
  
  const projectList = [
    {
      title: "Project 1",
      private: false,
      description: "A brief description of Project 1.",
      technologies: ["React", "JavaScript", "TailwindCSS"],
      demoLink: "https://demo-link.com",
      codeLink: "https://github.com/your-repo",
      image: "./project/project1.PNG"
    },
    {
      title: "Project 2",
      description: "A brief description of Project 2.",
      technologies: ["Ruby on Rails", "PostgreSQL"],
      demoLink: "https://demo-link.com",
      codeLink: "https://github.com/your-repo",
      image: "./project/project1.PNG"
    },
    {
      title: "Project 2",
      description: "A brief description of Project 2.",
      technologies: ["Ruby on Rails", "PostgreSQL"],
      demoLink: "https://demo-link.com",
      codeLink: "https://github.com/your-repo",
      image: "./project/project1.PNG"
    },
    {
      title: "Project 2",
      description: "A brief description of Project 2.",
      technologies: ["Ruby on Rails", "PostgreSQL"],
      demoLink: "https://demo-link.com",
      codeLink: "https://github.com/your-repo",
      image: "./project/project1.PNG"
    },
    {
      title: "Project 2",
      description: "A brief description of Project 2.",
      technologies: ["Ruby on Rails", "PostgreSQL"],
      demoLink: "https://demo-link.com",
      codeLink: "https://github.com/your-repo",
      image: "./project/project1.PNG"
    },
    {
      title: "Project 2",
      description: "A brief description of Project 2.",
      technologies: ["Ruby on Rails", "PostgreSQL"],
      demoLink: "https://demo-link.com",
      codeLink: "https://github.com/your-repo",
      image: "./project/project1.PNG"
    },
  ];

  return (
    <div className="py-20">
      <h1 className="text-3xl md:text-4xl font-semibold mb-10 text-center text-primary-0 md:text-start">
        My Projects
      </h1>
      <div className="grid grid-cols-2 gap-8 items-center">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="w-full max-w-4xl bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row transition-transform transform hover:scale-105"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full md:w-1/3 h-48 md:h-auto object-cover"
            />
            <div className="p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-100 mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-200 mb-4">{project.description}</p>
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-200">Technologies:</h3>
                  <ul className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, techIndex) => (
                      <li
                        key={techIndex}
                        className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex gap-4">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-0 text-white py-2 px-4 rounded hover:bg-primary-1"
                >
                  Demo
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
