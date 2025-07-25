import heroImage from '../../assets/hero-img.png';
import React from 'react';
import Tags from './Tags.jsx';
import studentIcon from '../../assets/student.svg';
import userIcon from '../../assets/user.svg';
import emailIcon from '../../assets/email.svg';
import graphIcon from '../../assets/graph.svg';


function HeroImage(){
    return (
        <div className="hero-pic">
          <div className="hero-image">
          <img src={heroImage} alt="Hero" />

          <div className="hero-tags">
            <Tags
             icon={studentIcon} 
             value="250k" 
             label="Assistant Student" 
             className={"student-tag"}
             style={{top: '27%', left: '5%'}}
             />
            <Tags
             icon={emailIcon} 
             value="Congratulations" 
             label="Your admission completed"
             className="email-tag"
             status={true}
             style={{ bottom: '37%', right: '-49%' }} />
            <Tags
             icon={userIcon} 
             value="User Experience Class" 
             label="Today at 12.00 PM"
             className={"user-tag"}
             showButton={true}
             style={{ top: '69%', left: '8%' }} />
             <img 
             src={graphIcon} 
             alt="Graph"
             style={{ position: 'absolute', bottom: '78%', right: '2%', width: '70px'}}/>
          </div>
          </div>
        </div>
    );
}
export default HeroImage;