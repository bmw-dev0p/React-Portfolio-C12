import './styles/about.css';
import self from '../assets/selfplosion.png';
export default function About() {
    return (
      <div className="bg" >
      <div className="container">
        <div className="row aboutMe">
          <div className="col">
            <h2 className='medText'>Brad Webster</h2>
            <h1 className='bigText'>I am...</h1>
            <p>I’m a student software developer with a growing skill set.. I’ve dived into the world of coding through university, coding bootcamps, and self-taught lessons. I have experience with HTML, CSS, and JavaScript, and I’m excited to continue exploring with TypeScript, Node.js, and React.
            <br />
            My journey started with a curiosity about how electronics work, taking apart mobile phones and building desktop PCs. It quickly evolved into a full-blown passion for creating intuitive and dynamic applications. I thrive on solving problems and am always eager to learn new technologies and best practices.
            <br />
            When I’m not coding, you can find me experimenting with new projects, collaborating with fellow developers, or simply exploring innovative tech solutions. I’m looking forward to contributing my skills to meaningful projects and growing as a developer in this ever-evolving field.
            <br />
            Feel free to browse through my portfolio to see some of the work I’ve done and get in touch if you’d like to collaborate or chat about technology!</p>
            </div>
            <img className='col self' src={self} alt="myself" />
        </div>
      </div>
    </div>
    );
  }