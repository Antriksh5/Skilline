import React from "react";
import './Header.css';
import statusIcon from '../../assets/tick.svg';

function Tags({icon, value, label, style, className, showButton, status}) {
    return (
        <div className={`tag-box ${className || ''}`} style={style}>
            <div className="tag-icon-container">
            {icon && <img src={icon} className="tag-icon" />}
            {status && <img src={statusIcon} className="tag-status" />}

            </div>
            <div className="tag-text">
                <strong>{value}</strong>
                <span>{label}</span>
                {showButton && <button className="tag-join-btn">Join Now</button>}
            </div>
        </div>
    );
}

export default Tags;

