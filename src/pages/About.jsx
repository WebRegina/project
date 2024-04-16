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
      <div className="our-values">
        <div className="values-left">
          <h1>Our Values</h1>
          <p>
            Our story is one of continuous growth and evolution. We started as a
            small team with big dreams, determined to create a real estate
            platform that transcended the ordinary.
          </p>
        </div>
        <div className="values-right">
          <div className="values-box">
            <div className="values-top">
              <img src="imgs/star.png" alt="" />
              <h3>Trust</h3>
            </div>
            <p>
              Trust is the cornerstone of every successful real estate
              transaction.
            </p>
          </div>
          <div className="values-box">
            <div className="values-top">
              <img src="imgs/hat.png" alt="" />
              <h3>Excellence</h3>
            </div>
            <p>
              We set the bar high for ourselves. From the properties we list to
              the services we provide.
            </p>
          </div>
          <div className="values-box">
            <div className="values-top">
              <img src="imgs/star.png" alt="" />
              <h3>Client-Centric</h3>
            </div>
            <p>
              Your dreams and needs are at the center of our universe. We
              listen, understand.
            </p>
          </div>
          <div className="values-box">
            <div className="values-top">
              <img src="imgs/community.png" alt="" />
              <h3>Our Commitment</h3>
            </div>
            <p>
              We are dedicated to providing you with the highest level of
              service, professionalism, and support.
            </p>
          </div>
        </div>
      </div>
      <div className="our-achivements">
        <div className="achivements-top">
          <h1>Our Achievements</h1>
          <p>
            Our story is one of continuous growth and evolution. We started as a
            small team with big dreams, determined to create a real estate
            platform that transcended the ordinary.
          </p>
        </div>
        <div className="achivements-bottom">
          <div className="achivement-card">
            <h3>3+ Years of Excellence</h3>
            <p>
              With over 3 years in the industry, we've amassed a wealth of
              knowledge and experience, becoming a go-to resource for all things
              real estate.
            </p>
          </div>
          <div className="achivement-card">
            <h3>Happy Clients</h3>
            <p>
              Our greatest achievement is the satisfaction of our clients. Their
              success stories fuel our passion for what we do.
            </p>
          </div>
          <div className="achivement-card">
            <h3>Industry Recognition</h3>
            <p>
              We've earned the respect of our peers and industry leaders, with
              accolades and awards that reflect our commitment to excellence.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
