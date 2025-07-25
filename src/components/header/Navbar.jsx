import polyLogo from '../../assets/polyLogo.svg';
import React from 'react';
import './Header.css';

function Navbar() {
return (<nav className="navbar">
        <div className="navbar-logo">
          <a href="/">
            <img src={polyLogo} alt="Logo" />
            <span>Skilline</span>
          </a>
        </div>

        <div className="navbar-right">
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
      </nav>


);
}
export default Navbar;