import './styles/home.css';
import coder from '../assets/coder.png';

export default function Home() {
  return (
    <div className="home-section" >
      <div className="container fluid">
        <div className="row">
          <div className="col-md-6">
            <h1 className='bigName'>Brad Webster</h1>
          </div>
        </div>
        <div className="row">
          <p className='col'>
            Hello! I’m a passionate student software developer with a growing skill set in web development. I’ve dived into the world of coding through HTML, CSS, and JavaScript, and I’m excited to continue exploring with TypeScript, Node.js, and React.
            <br />
            My journey started with a curiosity about how websites work, and it quickly evolved into a full-blown passion for creating intuitive and dynamic web applications. I thrive on solving problems and am always eager to learn new technologies and best practices.
            <br />
            When I’m not coding, you can find me experimenting with new projects, collaborating with fellow developers, or simply exploring innovative tech solutions. I’m looking forward to contributing my skills to meaningful projects and growing as a developer in this ever-evolving field.
            <br />
            Feel free to browse through my portfolio to see some of the work I’ve done and get in touch if you’d like to collaborate or chat about technology!
          </p>
          <img className='col coder' src={coder} alt="Logo" />
        </div>
      </div>
    </div>
  );
}