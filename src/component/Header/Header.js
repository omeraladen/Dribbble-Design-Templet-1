import React from 'react'
import './header.scss';


function Header() {
  return (
    <header>
        <div className='container'>
        <a href="#" className='logo'>
            <img src="" alt="" />
        </a>
        <nav>
            <ul>
                <li><a href="" className='active'>Home</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Portfolio</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Pricing</a></li>
                <li><a href="">Contact</a></li>
            </ul>
            <div className="form">

            </div>
        </nav>
    </div>
    </header>
  )
}

export default Header;