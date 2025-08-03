import React from "react";
import icon1 from "../../assets/icon-1.png"
import icon2 from "../../assets/icon-2.png"
import icon3 from "../../assets/icon-3.png"


function FeatureBlock({image, imageback, title, description, bullets, isReversed}){
    // ...existing code...
    
    
    return(
        <div className={`feature-block ${isReversed? "reversed" : ""}`}>

            <div className="feature-image">
                <img className= "main-img" src={image} alt={title} />
                {imageback && <img className="back-img" src={imageback} alt="" />}
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