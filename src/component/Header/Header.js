import React from 'react'
import './header.scss';
import { FaBeer , BsSearch } from 'react-icons/fa';


function Header() {
  return (
    <header>
        <div className='container'>
        <a href="#" className='logo'>
        <i class="fa-solid fa-graduation-cap"></i>
          <h3>Udacity</h3>
        </a>
        <nav>
          <i className="fas fa-bars toggle-menu"></i>
            <ul>
                <li><a href="" className='active'>Home</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Portfolio</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Pricing</a></li>
                <li><a href="">Contact</a></li>
            </ul>
            <div className="form">
            <i class="fa-solid fa-magnifying-glass"></i>
            </div>
        </nav>
    </div>
    </header>
  )
}

export default Header;