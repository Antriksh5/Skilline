import React from "react";
import "./Wis.css";


function WisFeatures({ bgImage, title, btn, isStudentCard }) {

    const cardStyle = {
    backgroundImage: `
      linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url(${bgImage})
    `,
  };

  return (
    <div className="wis-feature" style={cardStyle}>
      <div className="wis-feature-title">
        <h3>{title}</h3>
      </div>
      <div className="wis-feature-action">

        {isStudentCard ? (
          <input type="text" className="access-code-input" placeholder="Enter access code" />
        ) : (
          <button className="feature-btn">{btn}</button>
        )}
      </div>
    </div>
  );
}

export default WisFeatures;