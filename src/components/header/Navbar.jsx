import polyLogo from '../../assets/polyLogo.svg';
import React from 'react';
import './Header.css';
import { useState } from 'react';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

return (<nav className="navbar">
        <div className="navbar-logo">
          <a href="/">
            <img src={polyLogo} alt="Logo" />
            <span>Skilline</span>
          </a>
        </div>

        <div className={`navbar-right ${isMenuOpen ? 'open' : ''}`}>
          <ul className="navbar-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
          <div className="navbar-actions">
            <button className="login-btn">Login</button>
            <button className="signup-btn">Sign Up</button>
          </div>
        </div>

        <button className="hamburger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        ...
      </button>
      </nav>


);
}
export default Navbar;