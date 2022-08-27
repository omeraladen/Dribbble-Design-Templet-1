import {Link , NavLink} from 'react-router-dom'
import Logo from '../../images/logo.png'
import {links} from '../../data' 
import {GoThreeBars} from 'react-icons/go'
import './navbar.scss'

const Navbar = () => {
  return (
    <nav>
        <div className="container nav__container">
            <Link to='/' className="logo">
                <img src={Logo} alt="nav-logo" />
            </Link>
            <ul className='nav__links'>
              { 
                links.map( (link , index) => {
                  return ( 
                    <li key={index}>
                      <NavLink to={link.path}>{link.name}</NavLink>
                    </li>
                  )
                } )
              }
            </ul>
              <button className='nav__toggle-btn'>
                <GoThreeBars/>
              </button>

        </div>
    </nav>
  )
}

export default Navbar;