import { Typewriter } from 'react-simple-typewriter';

export default function Skills() {
  return (
    <div className='py-20'>
      <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center md:text-start">
        <span className="text-primary-0">
          <Typewriter
            words={['Skills in Development']}
            loop={1}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>

      <div className="frontend mb-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center md:text-start">
          <span className="font-[300] text-tertiary-0">
            <Typewriter
              words={['Front-end Tech Stack']}
              loop={1}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2500}
            />
          </span>
        </h2>
        <div className="flex xl:flex-nowrap flex-wrap gap-4 justify-center md:justify-start">
          {renderTechStack(frontendTechStack)}
        </div>
      </div>

      <div className="backend mb-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center  md:text-start">
          <span className="font-[300] text-tertiary-0">
            <Typewriter
              words={['Back-end Tech Stack']}
              loop={1}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2500}
            />
          </span>
        </h2>
        <div className="flex xl:flex-nowrap flex-wrap gap-4 justify-center md:justify-start">
          {renderTechStack(backendTechStack)}
        </div>
      </div>

      <div className="version-control mb-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center  md:text-start">
          <span className="font-[300] text-tertiary-0">
            <Typewriter
              words={['Version Control']}
              loop={1}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2500}
            />
          </span>
        </h2>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          {renderTechStack(versionControlTechStack)}
        </div>
      </div>
    </div>
  );
}

const frontendTechStack = [
  { src: './reactjs.png', alt: 'React', name: 'REACT' },
  { src: './js.png', alt: 'JavaScript', name: 'JAVASCRIPT' },
  { src: './ts.png', alt: 'TypeScript', name: 'TYPESCRIPT' },
  { src: './html.png', alt: 'HTML', name: 'HTML' },
  { src: './css.png', alt: 'CSS', name: 'CSS' },
  { src: './tailwindcsss.png', alt: 'TailwindCSS', name: 'TAILWINDCSS' },
];

const backendTechStack = [
  { src: './ror.png', alt: 'Ruby on Rails', name: 'RUBY ON RAILS' },
  { src: './firebase.png', alt: 'Firebase', name: 'FIREBASE' },
  { src: './postgresql.png', alt: 'PostgreSQL', name: 'POSTGRESQL' },
  { src: './sqlite.png', alt: 'SQLite', name: 'SQLITE' },
  { src: './rest.jpg', alt: 'REST API', name: 'REST API' },
  { src: './postman.png', alt: 'Postman', name: 'POSTMAN' }
];

const versionControlTechStack = [
  { src: './git.png', alt: 'Git', name: 'GIT' },
  { src: './github.png', alt: 'GitHub', name: 'GITHUB' }
];

function renderTechStack(stack) {
  return stack.map((tech, index) => (
    <div key={index} className="flex flex-col justify-center items-center max-w-36 w-full rounded-xl p-2 gap-2">
      <img src={tech.src} alt={tech.alt} className="w-full max-w-36 h-[9rem]" />
      <h2>{tech.name}</h2>
    </div>
  ));
}
