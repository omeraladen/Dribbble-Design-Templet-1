import './about.scss'
import {Link } from 'react-router-dom'
import macBook from '../../images/main__header.png'
import iphone from '../../images/iphone.png'
import ipad from '../../images/ipad.png'
import {AiOutlineCheckCircle} from 'react-icons/ai'

const About =() => {
  return (
    <div>
      <div className="main__header">
        <div className="main__header-container">
          <div className="main__header-left">
            <h1>Making Task <br /> Management More <br /> Human!</h1>
            
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Ipsam, debitis make it possible.</p>

            <div className="check">
            <h4><AiOutlineCheckCircle/> Make Meeting More exciting! </h4>
            <h4><AiOutlineCheckCircle/> Stay connected all-time,full-time! </h4>
            
            </div>

            <div className="btn">
            <Link  to='/plans' className="btn-1 lg">
                Get Started
            </Link>  
            
            <Link to='/plans' className="btn-2 lg">
                How it works?
            </Link>  
            </div>
          </div>

          <div className="main__header-right">
            <div className="main__header-circle">
              <div className="main__header-image">
              <img className='iphone' src={iphone} alt="nav-logo" />
              <img className='macBook' src={macBook} alt="nav-logo" />
              <img className='ipad' src={ipad} alt="nav-logo" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About;