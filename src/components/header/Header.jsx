import React from 'react';
import './Header.css';
import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import HeroImage from './HeroImage.jsx';
import useIntersectionObserver from "../../hook/useIntersectionObserver";
function Header() {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  return (
    <header ref={ref} className={`site-header ${isVisible ? 'is-visible' : ''} animate-on-scroll`}>
      <Navbar />
      <div className="hero-section">
        <Hero />
        <HeroImage />
      </div>
      
    </header>
  );
}

export default Header;
