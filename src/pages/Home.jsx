import './styles/home.css';
import coder from '../assets/coder.png';
import Typewriter from 'typewriter-effect';

export default function Home() {
  return (
    <div className="bg">
      <div className="container">
        <div className="heroBanner">
          {/* Text Column */}
          <div className="col textCol">
            <h2 className="medTextHome">Hello, I'm</h2>
            <h1 className="bigTextHome"><span className="purple">&lt;Brad/&gt;</span> Webster</h1>
            <p className="medTextHome">
              A passionate student studying to become a
              <Typewriter
                options={{
                  strings: ['Software Developer', 'Web Developer', 'React Developer', 'Full Stack Developer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </p>
          </div>
          {/* Image Column */}
          <div className="col imageCol">
            <img className="coder" src={coder} alt="Logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
