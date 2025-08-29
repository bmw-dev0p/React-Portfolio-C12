import React, { useEffect } from 'react';
import './styles/about.css';
import self from '../assets/self.jpg';

// Function to load GitHub contributions graph and streak stats
function GitHubGraphs() {
  return (
    <div className="row graphs">
      <div className="col text-center">
        <h2 className="medText mt-4">GitHub Contributions</h2>
        <img
          src="https://github-readme-stats.vercel.app/api?username=bmw-dev0p&show_icons=true&theme=radical"
          alt="GitHub Contributions"
          className="github-contributions"
        />
      </div>
      <div className="col text-center">
        <h2 className="medText mt-4">GitHub Streak Stats</h2>
        <img
          src="https://github-readme-streak-stats.herokuapp.com/?user=bmw-dev0p&theme=radical"
          alt="GitHub Streak Stats"
          className="github-streak"
        />
      </div>
      <div className="col-12 text-center">
        <h2 className="medText mt-4">GitHub Contributions Calendar</h2>
        <iframe
          src="https://ghchart.rshah.org/bmw-dev0p"
          title="GitHub Contributions Calendar"
          className="github-calendar"
          style={{
            border: "none",
            width: "100%",
            height: "200px",
            overflow: "hidden",
          }}
        ></iframe>
      </div>
    </div>
  );
}



// Function to render Skill Bars and Circles
function SkillBarsAndCircles() {
  const codingLanguages = [
    { name: 'HTML', percentage: 90 },
    { name: 'CSS', percentage: 90 },
    { name: 'JavaScript', percentage: 80 },
    { name: 'Typescript', percentage: 70 },
    { name: 'Python', percentage: 50 },
    { name: 'Java', percentage: 40 },
    { name: 'SQL', percentage: 50 },
  ];

  const codingFrameworks = [
    { name: 'React', percentage: 80 },
    { name: 'Node.js', percentage: 85 },
    { name: 'Express.js', percentage: 75 },
    { name: 'GraphQL', percentage: 65 },
    { name: 'MongoDB', percentage: 70 },
    { name: 'PostgreSQL', percentage: 60 },
    { name: 'Cypress/Vitest', percentage: 70 },
    { name: 'CI/CD (Netlify/Render)', percentage: 65 },
    { name: 'Security (JWT/bcrypt)', percentage: 75 },
  ];


  return (
    <div className="row skill-row">
      <div className="col-lg-6">
        <h2 className="medText">Coding Languages</h2>
        <div className="skill-bars">
          {codingLanguages.map((language, index) => (
            <div key={index} className="skill-bar">
              <span className="skill-label">{language.name}</span>
              <div className="bar">
                <div className="progress" style={{ width: `${language.percentage}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="col-lg-6">
        <h2 className="medText">Coding Frameworks</h2>
        <div className="skill-circles">
          <div className="row">
            {codingFrameworks.map((framework, index) => (
              <div key={index} className="col-6 col-md-4">
                <div className="skill-circle">
                  <div className="circle" style={{ '--percentage': `${framework.percentage}%` }}>
                    <span className="percentage">{framework.percentage}%</span>
                    <span className="framework-label">{framework.name}</span>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
}



// Main About Component
export default function About() {
  return (
    <div className="bg">
      <div className="container">
        <div className="row aboutMe align-items-center">
          <div className="col-lg-6 mb-4">
            <h2 className='medText'>Brad Webster</h2>
            <h1 className='bigText'>I <span className='purple'>&lt;am.../&gt;</span></h1>
            <p>
              I’m a student software developer with a growing skill set. My journey began with a curiosity about how electronics work, taking apart mobile phones and building desktop PCs. That curiosity evolved into a passion for creating intuitive and dynamic applications. I thrive on solving problems and am always eager to learn new technologies and best practices.
              <br />
              When I’m not coding, you can find me experimenting with new projects, collaborating with fellow developers, or exploring innovative tech solutions. I’m excited to contribute my skills to meaningful projects and continue growing as a developer in this ever-evolving field.
            </p>
          </div>
          <div className="col-lg-6 mb-4 d-flex justify-content-center">
            <img className='self' src={self} alt="myself" />
          </div>
        </div>
        <SkillBarsAndCircles />
        <GitHubGraphs />
      </div>
    </div>
  );
}
