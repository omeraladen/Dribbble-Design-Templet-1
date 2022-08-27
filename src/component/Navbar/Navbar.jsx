import {Link , NavLink} from 'react-router-dom'
import Logo from '../../images/logo.png'
import './navbar.scss'

const Navbar = () => {
  return (
    <nav>
        <div className="container nav__container">
            <Link to='/' className="logo">
                <img src={Logo} alt="nav-logo" />
            </Link>


        </div>
    </nav>
  )
}

export default Navbar;