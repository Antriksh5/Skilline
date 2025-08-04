
import React from 'react';
import './Footer.css';
import skilline from '../../assets/skilline.svg';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-top">
            <div className="footer-brand">
          <div className="footer-logo">
            <img src={skilline} alt="Skilline Logo" />
            
          </div>
          <p className="footer-tagline">Virtual Class for Zoom</p>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-subscribe">
          <h3>Subscribe to get our Newsletter</h3>
          <form className="subscribe-form">
            <input type="email" placeholder="Your Email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <ul className="footer-links">
            <li><a href="#">Careers</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
          <p className="footer-copyright">
            © 2021 Class Technologies Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;