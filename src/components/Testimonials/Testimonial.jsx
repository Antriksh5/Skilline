import React from "react";
import "./Testimonial.css";
import girlImg from "../../assets/girl2.svg"
import stars from "../../assets/stars.png"
import useIntersectionObserver from "../../hook/useIntersectionObserver";


function Testimonial() {
          const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <section ref={ref} className={`test-section ${isVisible ? 'is-visible' : ''} animate-on-scroll`}>
            <div className="test-container">
            <div className="test-txt">

            <p className="test-head">TESTIMONIAL</p>
            <h3 className="test-main">What They Say?</h3>
            <div className="test-des">
                <p>Skilline has got more than 100k positive ratings from our users around the world. </p>
                <p>Some of the students and teachers were greatly helped by the Skilline.</p>
                <p>Are you too? Please give your assessment</p>
            </div>
            <button className="test-btn">Write your assessment</button>
            </div>

            <div className="test-img">
                <img className="girl-img" src={girlImg} alt="" />

                <div className="test-card-wrapper">
                <div className="test-card">
                <p className="test-quote">
                    "Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. Skilline is exactly what our business has been lacking."
                </p>
                <div className="test-author">
                        <div className="author-info">
                        <p className="author-name">Gloria Rose</p>
                        </div>
                        <div className="author-rating">
                        <div className="stars"><img src={stars} alt="" /></div>
                        <p className="review-source">12 reviews at Yelp</p>
                        </div>
                </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    );
}

export default Testimonial;