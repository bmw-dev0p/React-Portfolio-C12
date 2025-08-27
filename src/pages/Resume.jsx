import './styles/resume.css';
import resume1 from '../assets/resume1.jpg';
import resume2 from '../assets/resume2.jpg';
import resumePDF from '../assets/BradWebster_Resume2025.pdf';


export default function Resume() {
  return (
    <div className='bg'>
      <div className="container">
        <div className='resume-text'>
        <h1 className='bigText'>Resume</h1>
        <p className='medText align'>
          Click 
          <a href={resumePDF} download className='purple'>&lt;here/&gt;</a> 
          to download my Resume
        </p>
        </div>

        <div className="resume-images">
          <img src={resume1} alt="Resume page 1" className="resume-img" />
          <img src={resume2} alt="Resume page 2" className="resume-img" />
        </div>
      </div>
    </div>
  );
}
