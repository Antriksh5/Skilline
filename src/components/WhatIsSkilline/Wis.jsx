import React from "react";
import WisFeatures from "./WisFeatures.jsx";
import "./Wis.css";

import instructorBg from "../../assets/instructors.svg"; 
import studentsBg from "../../assets/students.svg"; 
function Wis() {
  return (
    <section>
      <div className="heading">
        <h3>What is <span>Skilline?</span></h3>
      </div>
      <p className="description">
            Skilline is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
      </p>

      <div className="wis-feature-cards">
        <WisFeatures
          bgImage={instructorBg}
          title="FOR INSTRUCTORS"
          btn="Start a class today"
        />
        <WisFeatures
          bgImage={studentsBg}
          title="FOR STUDENTS"
          isStudentCard={true} 
        />
      </div>
    </section>
  );
}

export default Wis;