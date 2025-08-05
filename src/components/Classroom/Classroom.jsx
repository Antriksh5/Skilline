import React from "react";
import "./Classroom.css"
import classroomImg from "../../assets/classroom.svg";
import playIcon from "../../assets/play-button.svg";   
import useIntersectionObserver from "../../hook/useIntersectionObserver";
function Classroom(){
      const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
    return(
        <section ref={ref} className={`classroom ${isVisible ? 'is-visible' : ''} animate-on-scroll`}>
            <div className="left">
                <h2 className="left-head">Everything you can do in a physical classroom,<span> you can do with Skilline</span></h2>
                <p className="des">Skilline's school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</p>
                <a href="#" className="learn-more">Learn more</a>
            </div>



            <div className="right">
                <div className="img-container">
                    <img src={classroomImg} alt="Classroom" />
                    <div className="playBtn">
                        <img src={playIcon} alt="Play" />
                    </div>
                    <div className="corner-shape left-corner"></div>
                    <div className=" corner-shape right-corner"></div>
                </div>
            </div>
        </section>
    );
}

export default Classroom;