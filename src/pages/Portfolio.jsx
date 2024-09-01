import coder from '../assets/coder.png';
import './styles/portfolio.css';

export default function Portfolio() {
  return (
    <div className="bg">
      <div className="container">
        <h1 className="bigText" style={{ textAlign: 'center' }}>Coding Project Portfolio</h1>
        {/* start row1 */}
        <div className="row">
          <div className="col">
            <h2 className='medText'>Project 1</h2>
            <p className='medText'>Description of Project 1</p>
            <img className='col coder' src={coder} alt="Logo" />
          </div>
          <div className="col">
            <h2 className='medText'>Project 2</h2>
            <p className='medText'>Description of Project 2</p>
            <img className='col coder' src={coder} alt="Logo" />
          </div>
          </div>
          {/* start row2 */}
          <div className="row">
          <div className="col">
            <h2 className='medText'>Project 3</h2>
            <p className='medText'>Description of Project 3</p>
            <img className='col coder' src={coder} alt="Logo" />
          </div>
          
          <div className="col">
            <h2 className='medText'>Project 4</h2>
            <p className='medText'>Description of Project 4</p>
            <img className='col coder' src={coder} alt="Logo" />
          </div>
        </div>
        {/* start row2 */}
        <div className="row">
          <div className="col">
            <h2 className='medText'>Project 5</h2>
            <p className='medText'>Description of Project 5</p>
            <img className='col coder' src={coder} alt="Logo" />
          </div>
          <div className="col">
            <h2 className='medText'>Project 6</h2>
            <p className='medText'>Description of Project 6</p>
            <img className='col coder' src={coder} alt="Logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
