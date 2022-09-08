import {Link , NavLink} from 'react-router-dom'
import Logo from '../../images/logo.png'
import {links} from '../../data' 
import {GoThreeBars } from 'react-icons/go'
import {IoMdClose} from 'react-icons/io'
import './navbar.scss'
import { useState } from 'react'
// import {IoIosArrowDown} from 'react-icons/io'

const Navbar = () => {
  const [ isNavShown , setIsShownNav ] = useState(false)
  return (
    <nav>
        <div className="container nav__container">
            <Link to='/' className="logo">
                <img src={Logo} alt="nav-logo" />
            </Link>
            <ul className={ `nav__links ${ isNavShown ? 'show__nav' : 'hide__nav' } ` } >
              { 
                links.map( (link , index) => {
                  return ( 
                    <li key={index}>
                      <NavLink id='nav_link' className={({isActive}) => isActive ? 'active-nav' : '' }   to={link.path}>{link.name}</NavLink>
                      {/* <IoIosArrowDown/> */}
                    </li>
                  )
                } )
              }
            </ul>
              <button className='nav__toggle-btn' onClick={() => setIsShownNav(!isNavShown)}>
                
                {
                  isNavShown ? <IoMdClose/> : <GoThreeBars/>
                }
                
              </button>
             
        </div>
    </nav>
    
  )

  


  
}
export default Navbar;