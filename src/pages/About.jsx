import React from "react";

function About() {
  return (
    <>
      <div className="about-main">
        <div className="about-left">
          <h1>Our Journey</h1>
          <p>
            Our story is one of continuous growth and evolution. We started as a
            small team with big dreams, determined to create a real estate
            platform that transcended the ordinary. Over the years, we've
            expanded our reach, forged valuable partnerships, and gained the
            trust of countless clients.
          </p>
          <div className="about-containers">
            <div className="about-card">
              <h3>200+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="about-card">
              <h3>10k+</h3>
              <p>Properties For Clients</p>
            </div>
            <div className="about-card">
              <h3>16+</h3>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>
        <div className="about-right">
          <img src="imgs/about-main.svg" alt="" />
          <p></p>
        </div>
      </div>
    </>
  );
}

export default About;
