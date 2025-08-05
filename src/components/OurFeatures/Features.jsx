import React from "react";
import "./Features.css"
import FeatureBlock from "./FeatureBlock";
import interfaceImage from "../../assets/interface.svg"
import girlImage from "../../assets/girl.svg"
import grid from "../../assets/dot-grid.png"
import questionImage from "../../assets/questions.svg"
import managementImage from "../../assets/management.svg"
import discussionImage from "../../assets/Discussions.svg"
import icon1 from "../../assets/icon-1.png"
import icon2 from "../../assets/icon-2.png"
import icon3 from "../../assets/icon-3.png"
import feat1 from "../../assets/feat1.svg"
import feat2 from "../../assets/feat2.svg"

import useIntersectionObserver from "../../hook/useIntersectionObserver";
function Features () {

    
      const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
    return(
        <section ref={ref} className={`features-section ${isVisible ? 'is-visible' : ''} animate-on-scroll`}>
            <div className="feat-txt">
                <h2>
                    Our<span> Features</span>
                </h2>
                <p className="subtitle">
                    This very extraordinary feature, can make learning activities more efficient
                </p>
            </div>
            <FeatureBlock 
                title={<h3>A <span>user interface</span> designed for the classroom</h3>}
                description=""
                bullets={[
                    {   icon: icon1,
                        text: "Teachers don't get lost in the grid view and have a dedicated Podium space."

                    },
                    {   icon: icon2,
                        text: "TA's and presenters can be moved to the front of the class."

                    },
                    {
                        icon: icon3,
                        text: "Teachers can easily see all students and class data at one time."

                    }
                ]}
                image={interfaceImage}
                
            />
            <FeatureBlock 
                title={<h3><span>Tools</span> For Teachers And Learners</h3>}
                description="Class has a dynamic set of teaching tools built to be deployed and used during class.
                                Teachers can handout assignments in real-time for students to complete and submit."
                
                image={girlImage}
                imageback={grid}
                imageback1={feat1}
                imageback2={feat2}
                isReversed={true}
               

            />
            <FeatureBlock 
                title={<h3>Assessments, <span>Quizzes</span>, Tests </h3>}
                description="Easily launch live assignments, quizzes, and tests.
                    Student results are automatically entered in the online gradebook."
                
                image={questionImage}
                
            />
            <FeatureBlock 
                title={<h3><span>Class Management</span> Tools for Educators</h3>}
                description="Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time."
               
                image={managementImage}
                isReversed={true}
             
            />
            <FeatureBlock 
                title={<h3>One-on-One <span>Discussions</span></h3>}
                description="Teachers and teacher assistants can talk with students privately without leaving the Zoom environment."
                
                image={discussionImage}
                
            />
            <div className="see-more-btn"><button className="see-more">See more features</button></div>
        </section>
    );
}
export default Features 