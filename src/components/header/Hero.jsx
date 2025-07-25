import React from "react";
import playBtn from "../../assets/playbtn.png";
import './Header.css';

function Hero() {
    return (
       
                <div className="hero-text">
                  <h1><span>Studying</span> Online is now much easier</h1>
                  <p>Skilline is an interesting platform that will teach you in a more interactive way.</p>
        
                  <div className="hero-buttons">
                    <button className="get-started">Join for free</button>
                    <div className="watch-how">
                       <img className="play-btn" src={playBtn} alt="Play" />
                      <span>Watch how it works</span></div>
                  </div>
                </div>

    );
}

export default Hero;