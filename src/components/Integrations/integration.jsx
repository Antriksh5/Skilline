import React from "react";
import "./integration.css"

import onedriveImg from "../../assets/onedrive.svg"
import boxImg from "../../assets/box.svg"
import driveImg from "../../assets/drive.svg"
import teamsImg from "../../assets/teams.svg"

function Integration() {
    return(
        <section className="integration-section">
            <div className="int-container">
            <div className="integration-icons">
                <img className="oneDriveLogo" src={onedriveImg} alt="" />
                <img className="boxLogo" src={boxImg} alt="" />
                <img className="driveLogo" src={driveImg} alt="" />
                <img className="teamsLogo" src={teamsImg} alt="" />
            </div>
            <div className="inte-text">
                <p className="int-head">INTEGRATIONS</p>
                <h3 className="int-main">200+ educational tools and platform <span>integrations</span></h3>
                <p className="int-des">Schoology has every tool your classroom needs and comes pre-integrated with more than 200+ tools, student information systems (SIS), and education platforms.</p>
                <button className="int-btn">See All Integrations</button>
            </div>
            </div>
        </section>
    );
}

export default Integration;