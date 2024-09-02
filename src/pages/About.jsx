import React, { useEffect } from 'react';
import './styles/about.css';
import self from '../assets/selfplosion.png';

export default function About() {
  useEffect(() => {
    // Load CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'http://lengthylyova.pythonanywhere.com/static/gh-contrib-graph/gh.css';
    document.head.appendChild(link);

    // Load JS
    const script = document.createElement('script');
    script.src = 'http://lengthylyova.pythonanywhere.com/static/gh-contrib-graph/gh.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function
    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="bg">
      <div className="container">
        <div className="row aboutMe align-items-center">
          <div className="col-lg-6 mb-4">
            <h2 className='medText'>Brad Webster</h2>
            <h1 className='bigText'>I <span className='purple'>&lt;am.../&gt;</span></h1>
            <p>
              I’m a student software developer with a growing skill set.. I’ve dived into the world of coding through university, coding bootcamps, and self-taught lessons. I have experience with HTML, CSS, and JavaScript, and I’m excited to continue exploring with TypeScript, Node.js, and React.
              <br />
              My journey started with a curiosity about how electronics work, taking apart mobile phones and building desktop PCs. It quickly evolved into a full-blown passion for creating intuitive and dynamic applications. I thrive on solving problems and am always eager to learn new technologies and best practices.
              <br />
              When I’m not coding, you can find me experimenting with new projects, collaborating with fellow developers, or simply exploring innovative tech solutions. I’m looking forward to contributing my skills to meaningful projects and growing as a developer in this ever-evolving field.
              <br />
              Feel free to browse through my portfolio to see some of the work I’ve done and get in touch if you’d like to collaborate or chat about technology!
            </p>
          </div>
          <div className="col-lg-6 mb-4 d-flex justify-content-center">
            <img className='self' src={self} alt="myself" />
          </div>
        </div>
        {/* New Row for Skill Bars and Circles */}
        <div className="row skill-row">
          <div className="col-lg-6">
            <h2 className="medText">Coding Languages</h2>
            <div className="skill-bars">
            <div className="skill-bar">
                <span className="skill-label">HTML</span>
                <div className="bar">
                  <div className="progress" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="skill-bar">
                <span className="skill-label">CSS</span>
                <div className="bar">
                  <div className="progress" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="skill-bar">
                <span className="skill-label">JavaScript</span>
                <div className="bar">
                  <div className="progress" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="skill-bar">
                <span className="skill-label">Typescript</span>
                <div className="bar">
                  <div className="progress" style={{ width: '70%' }}></div>
                </div>
              </div>
              {/* Add more skill bars as needed */}
              <div className="skill-bar">
                <span className="skill-label">Python</span>
                <div className="bar">
                  <div className="progress" style={{ width: '50%' }}></div>
                </div>
              </div>
              <div className="skill-bar">
                <span className="skill-label">Java</span>
                <div className="bar">
                  <div className="progress" style={{ width: '40%' }}></div>
                </div>
              </div>
            </div>
          </div>
          {/* skill circles here  */}
          <div className="col-lg-6">
            <h2 className="medText">Coding Frameworks</h2>
            <div className="row">
              <div className="col-6 mb-4">
                <div className="skill-circle">
                  <span className="framework-label">React</span>
                  <div className="circle" style={{ background: 'conic-gradient(#61DAFB 0% 75%, #000000 75% 100%)' }}></div>
                </div>
              </div>
              <div className="col-6 mb-4">
                <div className="skill-circle">
                  <span className="framework-label">Node.js</span>
                  <div className="circle" style={{ background: 'conic-gradient(#8CC84B 0% 60%, #000000 60% 100%)' }}></div>
                </div>
              </div>
              {/* Add more skill circles as needed */}
            </div>
          </div>
        </div>

        {/* New Row for GitHub Contributions and Streak Graph */}
        <div className="row">
          <div className="col text-center">
            <h2 className="medText">GitHub Contributions</h2>
            <div id="gh" data-login="bmw-dev0p"></div>
          </div>
        <div className='col'>
            <h2 className="medText mt-4">GitHub Streak Stats</h2>
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=bmw-dev0p" // Replace with your GitHub username
              alt="GitHub Streak Stats"
              className="github-streak"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
