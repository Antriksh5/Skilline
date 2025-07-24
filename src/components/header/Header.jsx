import React from 'react';
import './Header.css';
import polyLogo from '../../assets/polyLogo.svg';
function Header() {
  return (
    <header className="site-header">
      <nav className='navbar'>

        <div className="navbar-logo">
            <a href="">
                <img src={polyLogo} alt="" />
                <span>
                    Skilline
                </span>
            </a>
        </div>
        <div className="navbar-right">
        
            <ul className='nav-links'>
                <li><a href="">Home</a></li>
                <li><a href="">Career</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">About Us</a></li>
            </ul>
        

        <div className="navbar-actions">
            <button className='login-btn'>Login</button>
            <button className='signup-btn'>Sign Up</button>
        </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;