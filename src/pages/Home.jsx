import { Typewriter } from 'react-simple-typewriter';
import { FaDownload } from 'react-icons/fa';
import { MdWork } from "react-icons/md";
export default function Home() {

  const highlight = "creating dynamic";

  return (
    <div className="">
      <h1 className="text-4xl font-bold mb-4">
        Hi! I am{' '}
        <span className="text-[#5DEBD7]">
          <Typewriter
            words={['Kevin Kyle Ganados']}
            loop={1}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
      <h2 className="text-2xl font-semibold mb-6">
      {' '}
        <span className="font-[200] text-[#3ABEF9]">
          <Typewriter
            words={['Junior Full Stack Developer']}
            loop={1}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2500}
          />
        </span>
      </h2>
      <div className="max-w-[80rem] w-full">
        <p className="text-lg">
          Welcome to my portfolio! I have a passion for <span className="highlight text-primary-0">{highlight}</span> and <span className='text-primary-0'>responsive web applications</span> that provide excellent user experiences. With a background in Information Technology, I specialize in <span className='text-primary-0'>front-end</span> and  <span className='text-primary-0'>Back-end</span> development, using a variety of modern technologies to build robust and scalable solutions.
        </p>
        <p className="text-lg mt-4">
          My expertise includes  <span className='text-primary-0'>HTML, CSS, JavaScript, React.js, Tailwind CSS,</span> and <span className='text-primary-0'>Ruby on Rails</span>. I am also proficient in database management with <span className='text-primary-0'>PostgreSQL</span> and have experience in integrating APIs to enhance application functionality. <span className='text-primary-0'>I am always eager to learn new skills and technologies</span> to stay updated with industry trends.
        </p>
        <p className="text-lg mt-4">
          On this website, you will find information about my projects, skills, and experiences. Feel free to explore and learn more about my work. If you have any questions or would like to collaborate on a project, don't hesitate to get in touch!
        </p>
        <p className="text-lg mt-4">
          Thank you for visiting my portfolio. I look forward to connecting with you and sharing my passion for web development.
        </p>
        <div className="mt-6 flex gap-4">
          <a href="/path-to-your-resume.pdf" download className="border-2 border-primary-0 hover:bg-gray-100 hover:text-black text-white py-2 px-4 rounded flex items-center max-w-32">
            <FaDownload className="mr-2" /> Resume
          </a>
          <a href="/path-to-your-resume.pdf" download className="border-2 border-primary-0 hover:bg-gray-100 hover:text-black text-white py-2 px-4 rounded flex items-center max-w-32">
            <MdWork className="mr-2" /> Hire me
          </a>
        </div>
      </div>
    </div>
  );
}
