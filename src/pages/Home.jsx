import './styles/home.css';
import coder from '../assets/coder.png';
import git from '../assets/gitWhite.png';
import linked from '../assets/linkWhite.png';
import Typewriter from 'typewriter-effect';

export default function Home() {
  return (
    <div className="bg" >
      <div className="container">
        <div className="row heroBanner">
          <div className="col">
            <h2 className='medText'>Hello, I'm</h2>
            <h1 className= 'bigText'><span className='purple'>&lt;Brad/&gt;</span> Webster</h1>
            <p className='medText'>
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
            <img className='col coder' src={coder} alt="Logo" />
        </div>
        <div className='row footer'>
          <img className='logo' src={git} alt="gitHub" />
          <img className='logo' src={linked} alt="linkedIn" />
        </div>
      </div>
    </div>
  );
}