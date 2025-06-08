import './styles/work.css';
import f1 from '../assets/fab/1.jpg';
import f2 from '../assets/fab/2.jpg';
import f3 from '../assets/fab/3.jpg';
import f4 from '../assets/fab/4.jpg';   
import f5 from '../assets/fab/5.jpg';
import f6 from '../assets/fab/6.jpg';
import f7 from '../assets/fab/7.jpg';
import f8 from '../assets/fab/8.jpg';
import f9 from '../assets/fab/9.jpg';
import f10 from '../assets/fab/10.jpg';
import f11 from '../assets/fab/11.jpg';
import f12 from '../assets/fab/12.jpg';
import f13 from '../assets/fab/13.jpg';
import f14 from '../assets/fab/14.jpg';
import f15 from '../assets/fab/15.jpg';
import f16 from '../assets/fab/16.jpg';
import f17 from '../assets/fab/17.jpg';
import f18 from '../assets/fab/18.jpg';
import f19 from '../assets/fab/19.jpg';
import f20 from '../assets/fab/20.jpg';
import f21 from '../assets/fab/21.jpg';
import f22 from '../assets/fab/22.jpg';
import f23 from '../assets/fab/23.jpg';
import f24 from '../assets/fab/24.jpg';
import f25 from '../assets/fab/25.jpg';

const images = [f1, f2, f3, f4, f5, f6, f7, f8, f9, f10,
  f11, f12, f13, f14, f15, f16, f17, f18, f19, f20,
  f21, f22, f23, f24, f25];
// for (let i = 1; i <= 25; i++) {
//     console.log(`f${i}`);
//   images.push(eval(`f${i}`)); 
// }




export default function Work() {
  return (
    <div className='bg'>
      <div className="container">
        <div className='work-text'>
        <h1 className='bigText'>Professional Tradesman </h1>
        <p className='medText align'> With over six years of hands-on experience in the skilled trades, I’ve honed precision, craftsmanship, and problem-solving as a professional carpet fabricator and installer. My work has taken me into high-end residential spaces and complex geometric builds, where attention to detail and efficiency are crucial. I bring that same discipline and work ethic into every technical project I build today as a software developer. I love building things, whether it’s a custom carpet installation or a complex software application. I thrive on challenges and enjoy finding innovative solutions to problems. My goal is to transfer my skills in craftsmanship and problem-solving to the world of software development, where I can create impactful solutions that improve people’s lives.</p>
        <a href="https://houseofcarpetrichmond.com/" target="_blank" className='medText align'>https://houseofcarpetrichmond.com/</a>

        <h1 className='bigText'>My <span className='purple'>&lt;Work/&gt;</span> </h1>
        
        <div className="work-gallery">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Work sample ${i + 1}`}
              className="work-img"
            />
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}