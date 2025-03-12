import wD from '../assets/wD.jpg';
import MFB from '../assets/MFB.png';
import SSAC from '../assets/SSAC.png';
import empDB from '../assets/empDB2.jpg';
import VBuilder from '../assets/VBuilder2.png';
import RMG from '../assets/RMG.png';
import bananaflix from '../assets/bananaFlix.jpg';
import pilotLogo from '../assets/pilotLogo.png';
import gBooks from '../assets/gBooks.jpg';
import kanban from '../assets/kanban.jpg';
import './styles/portfolio.css';

export default function Portfolio() {
  const projects = [
    {
      title: 'BananaFlix',
      imgSrc: bananaflix,
      description: 'Movie Database application that allows users to search, save, and rate movies. Features include ai chatbot movie recommendations, user authentication, dynamic rendering of movie data, and a responsive design.',
      githubLink: 'https://github.com/bmw-dev0p/BananaFlix',
      demoLink: 'https://bananaflix.onrender.com/',
    },
    {
      title: 'Project Pilot',
      imgSrc: pilotLogo,
      description: 'Collaborative project management application that allows users to create, assign, and track tasks. Features include user authentication, task status updates, and a responsive design.',
      githubLink: 'https://github.com/bmw-dev0p/Project-Pilot',
      demoLink: 'https://project-pilot-1.onrender.com',
    },
    {
      title: 'Google Books Search',
      imgSrc: gBooks,
      description: 'Google Books API search application that allows users to search, save, and view books. Features include user authentication, dynamic rendering of book data, and a responsive design.',
      githubLink: 'https://github.com/bmw-dev0p/Google-Books-C18',
      demoLink: 'https://google-books-c18.onrender.com/',
    },
    {
      title: 'Weather API Dashboard',
      imgSrc: wD,
      description: 'Integrated Weather application using OpenWeather API. Provides real-time weather data for any city in the world. Features include current weather, 5-day forecast, and search history.',
      githubLink: 'https://github.com/bmw-dev0p/Weather-Dash-Challenge9',
      demoLink: 'https://weather-dash-challenge9.onrender.com',
    },
    {
      title: 'Kanban Board',
      imgSrc: kanban,
      description: 'Kanban board application that allows users to create, edit, and delete tasks in productivity columns. Features include user authenitcation, task status updates, and a responsive design.',
      githubLink: 'https://github.com/bmw-dev0p/Kanban-Board-C14',
      demoLink: 'https://kanban-board-c14.onrender.com/',
    },
    {
      title: 'My First Blog',
      imgSrc: MFB,
      description: 'Simple blogging website where users can create, edit, and delete posts. Features include use of local storage, dynamic rendering of posts, and light/dark mode.',
      githubLink: 'https://github.com/bmw-dev0p/First-Blog-Challenge4',
      demoLink: 'https://bmw-dev0p.github.io/First-Blog-Challenge4/',
    },
    {
      title: 'Animal Adoption Center',
      imgSrc: SSAC,
      description: 'An elevated sample website for an animal adoption center. Users can browse, adopt, and print adoption certificates.',
      githubLink: 'https://github.com/bmw-dev0p/Animal-Shelter-Project1',
      demoLink: 'https://bmw-dev0p.github.io/Animal-Shelter-Project1/',
    },
    {
      title: 'Employee Database',
      imgSrc: empDB,
      description: 'Back-end SQL database app that simulates workplace heirarchy structures. Allows users to view, add, and modify employees, roles, and departments. Demonstrates best coding practices for server-side storage.',
      githubLink: 'https://github.com/bmw-dev0p/Employee-DB-Challenge10',
    },
    {
      title: 'Console Vehicle Builder',
      imgSrc: VBuilder,
      description: 'Console application that allows users to build and drive custom vehicles. Demonstrates object-oriented programming principles and inheritance structures.',
      githubLink: 'https://github.com/bmw-dev0p/Vehicle-Builder-Challenge8',
    },
    // {
    //   title: 'Professional README Generator',
    //   imgSrc: RMG,
    //   description: 'Node.js application that generates professional README files for GitHub repositories. Features include user input validation, markdown formatting, built-in badges,  and file creation.',
    //   githubLink: 'https://github.com/bmw-dev0p/README-Gen-Challenge7.2',
    // },
  ];

  return (
    <div className="portfolio-container">
      <h1 className="bigText">
        <span className='purple'>&lt;Coding/&gt;</span> Projects
      </h1>
      <div className="cards-wrapper">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <img src={project.imgSrc} alt={project.title} className="card-img" />
            <div className="card-content">
              <h2 className="card-title">{project.title}</h2>
              <p className="card-description">{project.description}</p>
              <div className="button-group">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <button className="button-85">GitHub</button>
                </a>
                {project.demoLink && (
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    <button className="button-85">Live Demo</button>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
