import React from "react";
import "./News.css";
import smallImg1 from "../../assets/small1.svg";
import smallImg2 from "../../assets/small2.svg";
import smallImg3 from "../../assets/small3.svg";
import largeImg from "../../assets/large.svg";

function News() {
    return(
        <section className="news-section"> 
            <div className="news-head">
                <h2>Lastest News and Resources</h2>
                <p>See the developments that have occurred to Skillines in the world</p>
            </div>

            <div className="news-container">
                <div className="article">
                    <div className="news-card">
                        <div className="news-img-container">
                        <img src={largeImg} alt="" />
                        <span className="news-tag">NEWS</span>
                        </div>
                    </div>
                    <div className="news-card-txt">
                        <h3>Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h3>
                        <p>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                        <a href="#">Read more</a>
                    </div>
                </div>

            <div className="news-small-card-list">
                <div className="news-small-card">
                    <div className="news-img">
                        <img src={smallImg1} alt="" />
                        <span className="press-release">PRESS RELEASE</span>
                    </div>
                    <div className="news-small-txt">
                        <h4>Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand</h4>
                        <p>Class Technologies Inc., the company that created Class,...</p>
                    </div>
                </div>

                <div className="news-small-card">
                    <div className="news-img">
                        <img src={smallImg2} alt="" />
                        <span className="news-tag">NEWS</span>
                    </div>
                    <div className="news-small-txt">
                        <h4>Zoom's earliest investors are betting millions on a better Zoom for schools</h4>
                        <p>Zoom was never created to be a consumer product. Nonetheless, the...</p>
                    </div>
                </div>

                <div className="news-small-card">
                    <div className="news-img">
                        <img src={smallImg3} alt="" />
                        <span className="news-tag">NEWS</span>
                    </div>
                    <div className="news-small-txt">
                        <h4>Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms</h4>
                        <p>This year, investors have reaped big financial returns from betting on Zoom...</p>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
}

export default News;