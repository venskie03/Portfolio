
import { Typewriter } from 'react-simple-typewriter';

const workExperiences = [
  {
    title: "Junior Web Developer",
    company: "Freelancer",
    duration: "January 2024 - November 2024",
    description: "At Tech Innovations Inc., I developed and maintained interactive user interfaces using React, ensuring seamless and responsive experiences across various devices and browsers. I utilized HTML, CSS, JavaScript, and TailwindCSS to implement modern design principles, creating visually appealing and user-friendly web pages. My role involved working closely with senior developers and project managers to understand requirements, contribute to project planning, and deliver features that aligned with client specifications and business goals. I contributed to the development of several key features and components, including forms, navigation, and dynamic content updates, enhancing overall functionality and user engagement. I emphasized writing clean, maintainable, and efficient code, following best practices and coding standards to ensure high-quality deliverables."
  },
  {
    title: "Web Developer Intern",
    company: "Municipality of Liloy",
    duration: "November 2023 - March 2024",
    description: "During my internship at the Municipality of Liloy, I enhanced the municipality's website by implementing PHP, HTML, and CSS to improve user experience and functionality. I collaborated with department heads to understand their specific needs and integrated relevant features into the website. I applied responsive design principles to ensure compatibility across various devices, increasing accessibility for residents. Additionally, I provided maintenance and updates to keep the website’s information current and accurate and assisted in training municipal staff on basic website management tasks for ongoing maintenance."
  }
];

export default function About() {
  return (
    <div className="py-20 md:px-4 w-full mx-auto">
      {/* Work Experience Section */}
      <section>
      <h1 className="text-xl md:text-2xl font-bold mb-10 text-center md:text-start">
        <span className="text-secondary">
          <Typewriter
            words={['Work Experience']}
            loop={1}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
        <div className="space-y-6">
          {workExperiences.map((experience, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg md:text-xl font-semibold text-secondary mb-2">{experience.title}</h3>
              <h4 className="text-lg font-medium text-tertiary mb-2">{experience.company}</h4>
              <p className="text-gray-300 mb-4">{experience.duration}</p>
              <p className="text-gray-200">{experience.description}</p>
            </div>
          ))}
        </div>
      </section>


    </div>
  );
}
