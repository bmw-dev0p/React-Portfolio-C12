import wD from '../assets/wD.jpg';
import MFB from '../assets/MFB.png';
import SSAC from '../assets/SSAC.png';
import empDB from '../assets/empDB2.jpg';
import VBuilder from '../assets/VBuilder2.png';
import RMG from '../assets/RMG.png';
import gitWhite from '../assets/gitWhite.png';
import './styles/portfolio.css';

export default function Portfolio() {
  const projects = [
    {
      title: 'Weather API Dashboard',
      imgSrc: wD,
      description: 'Integrated Weather application using OpenWeather API. Provides real-time weather data for any city in the world. Features include current weather, 5-day forecast, and search history.',
    },
    {
      title: 'My First Blog',
      imgSrc: MFB,
      description: 'Simple blogging website where users can create, edit, and delete posts. Features include use of local storage, dynamic rendering of posts, and light/dark mode.',
    },
    {
      title: 'Animal Adoption Center',
      imgSrc: SSAC,
      description: 'An elevated sample website for an animal adoption center. Users can browse, adopt, and print adoption certificates.',
    },
    {
      title: 'Employee Database',
      imgSrc: empDB,
      description: 'Back-end SQL database app that simulates workplace heirarchy structures. Allows users to view, add, and modify employees, roles, and departments. Demonstrates best coding practices for server-side storage.',
    },
    {
      title: 'Console Vehicle Builder',
      imgSrc: VBuilder,
      description: 'Console application that allows users to build and drive custom vehicles. Demonstrates object-oriented programming principles and inheritance structures.',
    },
    {
      title: 'Professional README Generator',
      imgSrc: RMG,
      description: 'Node.js application that generates professional README files for GitHub repositories. Features include user input validation, markdown formatting, built-in badges,  and file creation.',
    },
  ];

  return (
    <div className="bg">
      <div className="container">
        <h1 className="bigText" style={{ textAlign: 'center' }}>Coding Project Portfolio</h1>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="card custom-card">
                <img src={project.imgSrc} className="card-img-top" alt={project.title} />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
