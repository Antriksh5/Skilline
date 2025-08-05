import React from "react";
import icon1 from "../../assets/icon-1.png"
import icon2 from "../../assets/icon-2.png"
import icon3 from "../../assets/icon-3.png"
import useMousePosition from "../../hook/useMousePosition";

function FeatureBlock({image, imageback, title, description, bullets, isReversed, imageback1, imageback2}){
    
    const {x, y} = useMousePosition();
    const moveX = (x - window.innerWidth / 2) / 50;
    const moveY = (y - window.innerWidth / 2) / 50;
    return(
        <div className={`feature-block ${isReversed? "reversed" : ""}`}>

            <div className="feature-image">
                <img className= "main-img" 
                src={image}
                alt={title} 
                style={{ transform: `translate(${moveX * 0.5}px, ${moveY * 0.5}px)` }}

                 />
                {imageback && 
                <img className="back-img" 
                src={imageback} 
                alt=""  
                style={{ transform: `translate(${-moveX * 1.5}px, ${-moveY * 1.5}px)` }}
                
                />
                
                }
                {imageback1 && 
                <img className="back-small-img-1" 
                src={imageback1} 
                alt=""
                style={{transform: `translate(${moveX * 2.5}px, ${moveY * 2.5}px)`} } 
                
                />
                
                }
                {imageback2 && 
                <img className="back-small-img-2" 
                src={imageback2} 
                alt="" 
                style={{transform: `translate(${moveX * 3.5}px, ${moveY * 3.5}px)`}}
                
                />
                
                }
                <span className="circle circle-1"
                style={{ transform: `translate(${moveX * 4}px, ${-moveY * 4}px)` }}
                ></span>
                <span className="circle circle-2"
                style={{ transform: `translate(${-moveX * 5}px, ${-moveY * 5}px)` }}
                ></span>
                <span className="circle circle-3"
                style={{ transform: `translate(${moveX * 5}px, ${-moveY * 5}px)` }}
                ></span>
            </div>

            <div className="feature-txt">
              
                <h3 className="highlight">{title}</h3>
                <p>{description}</p>

                {bullets && (
                    <ul>
                        {bullets.map((item, i) => (
                            <li key={i} style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                                <div className="bullet-icon-bg">
                                {item.icon && <img src={item.icon} alt="bullet point" className="bullet-icon" />}
                                </div>
                                <span>{item.text}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default FeatureBlock;