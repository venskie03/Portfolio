import { Typewriter } from 'react-simple-typewriter';

export default function Projects() {
  const projectList = [
    {
      title: "ExceSol Website",
      private: false,
      description: "A responsive website built using HTML/CSS, JavaScript, and TailwindCSS. The project showcases modern web design and functionality.",
      technologies: ["HTML/CSS", "JavaScript", "TailwindCSS"],
      demoLink: "https://excesolution.com/",
      codeLink: "https://github.com/venskie03/newexcesolweb.git",
      image: "./project/project1.PNG"
    },
    {
      title: "ExceSol WebShop",
      private: false,
      description: "An e-commerce platform built with React, Ruby on Rails, and PostgreSQL, featuring Stripe payment integration for seamless transactions.",
      technologies: ["React", "Ruby on Rails", "PostgreSQL"],
      demoLink: "https://shop.excesolution.com/",
      codeLink: "https://github.com/venskie03/Excesolshop",
      image: "./project/shop.PNG"
    },
    {
      title: "UB Clinical System",
      private: true,
      description: "A healthcare management platform developed using React, Ruby on Rails, and PostgreSQL, designed to streamline clinical operations and patient management.",
      technologies: ["React", "Ruby on Rails", "PostgreSQL"],
      demoLink: "https://demo-link.com",
      codeLink: "https://github.com/your-repo",
      image: "./project/ub.PNG"
    },
    {
      title: "Job Boards",
      private: true,
      description: "A job listing platform similar to Indeed, built with React, Ruby on Rails, and PostgreSQL, enabling users to search for job postings and manage applications.",
      technologies: ["React", "Ruby on Rails", "PostgreSQL"],
      demoLink: "https://demo-link.com",
      codeLink: "https://github.com/your-repo",
      image: "./project/jobboards.PNG"
    },
    {
      title: "Learning Management System",
      private: true,
      description: "A comprehensive platform for managing courses, assessments, and student progress, developed with React, Ruby on Rails, and PostgreSQL.",
      technologies: ["React", "Ruby on Rails", "PostgreSQL"],
      demoLink: "https://demo-link.com",
      codeLink: "https://github.com/your-repo",
      image: "./project/lms.PNG"
    },
    {
      title: "Clouds Guru Website",
      private: false,
      description: "A responsive website built using HTML/CSS, JavaScript, and TailwindCSS. The project showcases modern web design and functionality.",
      technologies: ["React", "TailwindCSS"],
      demoLink: "https://thecloudsguru.netlify.app",
      codeLink: "https://github.com/venskie03/the_clouds_guru",
      image: "./project/guru.PNG"
    },
    {
      title: "Momentum Web App",
      private: false,
      description: "A clone of the popular Google Chrome extension, this web app provides a clean and responsive interface, offering personalized dashboards with to-do lists, weather updates, and daily inspiration.",
      technologies: ["HTML/CSS", "TailwindCSS"],
      demoLink: "https://andrewizo.github.io/momentumapp/",
      codeLink: "https://github.com/andrewizo/momentumapp/tree/kyle's-branch",
      image: "https://firebasestorage.googleapis.com/v0/b/messaging-app-a28b6.appspot.com/o/Capture.PNG?alt=media&token=8f66adb8-5ed0-40a2-acbc-01f8831802de"
    },
    {
      title: "Movie Web App",
      private: false,
      description: "A dynamic movie browsing platform built with React and TailwindCSS. It fetches data from a third-party API to display the latest movies, ratings, and details, providing users with an interactive and responsive experience.",
      technologies: ["React", "TailwindCSS", "Ruby On Rails", "PostgreSQL"],
      demoLink: "https://moviesfrees.netlify.app/",
      codeLink: "https://github.com/venskie03/Movie_site",
      image: "./project/movie.PNG"
    },
    {
      title: "Color Picker",
      private: false,
      description: "A simple and interactive color selection tool built with React and TailwindCSS. Users can choose and preview colors for web design and other creative projects in real-time.",
      technologies: ["React", "TailwindCSS", "Ruby On Rails", "PostgreSQL"],
      demoLink: "https://flatcolorpicker.netlify.app/",
      codeLink: "https://github.com/venskie03/color_picker",
      image: "./project/color.PNG"
    },
    {
      title: "Journal Web App",
      private: false,
      description: "A personal journal application built with Ruby on Rails and PostgreSQL. It allows users to create, edit, and manage their daily journal entries securely.",
      technologies: ["Ruby On Rails", "PostgreSQL"],
      demoLink: "https://journal-app-mpk2.onrender.com/",
      codeLink: "https://github.com/venskie03/Journal_app",
      image: "https://firebasestorage.googleapis.com/v0/b/messaging-app-a28b6.appspot.com/o/p4.PNG?alt=media&token=386a530e-2b15-4608-a78e-48b9c1d38974"
    },
    {
      title: "Online Food Inventory Web App",
      private: false,
      description: "A web application for managing food inventory, built with React and TailwindCSS. It provides a user-friendly interface for tracking and organizing food items, including quantities and expiration dates.",
      technologies: ["Ruby On Rails", "PostgreSQL"],
      demoLink: "https://onlinefood-app.onrender.com/users/sign_in",
      codeLink: "https://github.com/venskie03/Online_Food_Inventory_Management_App",
      image: "https://firebasestorage.googleapis.com/v0/b/messaging-app-a28b6.appspot.com/o/p5.PNG?alt=media&token=659305db-d655-4b4c-accc-91715c864876"
    },
    {
      title: "Liloy Websites",
      private: false,
      description: "A responsive website built using HTML/CSS, JavaScript, and TailwindCSS. The project showcases modern web design and functionality.",
      technologies: ["Ruby On Rails", "PostgreSQL"],
      demoLink: "https://liloy.gov.ph/",
      codeLink: "",
      image: "./project/liloy.PNG"
    },
  ];

  return (
    <div className="py-20">
      <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center md:text-start">
        <span className="text-primary-0">
          <Typewriter
            words={['My Projects']}
            loop={1}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row transition-transform transform hover:scale-105"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full md:w-1/3 h-48 md:h-auto object-cover"
            />
            <div className="p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold text-primary-0 mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-200 mb-4">{project.description}</p>
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-400">Technologies:</h3>
                  <ul className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, techIndex) => (
                      <li
                        key={techIndex}
                        className="bg-gray-800 border text-primary-0 text-xs px-2 py-1 rounded"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {project.private ? (
                <p className="text-gray-400">This project is private. Contact me for a demo.</p>
              ) : (
                <div className="flex gap-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-primary-1 hover:translate-y-[-0.5rem] transition-transform"
                  >
                    Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition-transform"
                  >
                    Code
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
