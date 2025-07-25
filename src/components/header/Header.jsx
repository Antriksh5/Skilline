import React from 'react';
import './Header.css';
import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import HeroImage from './HeroImage.jsx';

function Header() {
  return (
    <header className="site-header">
      <Navbar />
      <div className="hero-section">
        <Hero />
        <HeroImage />
      </div>
      
    </header>
  );
}

export default Header;
