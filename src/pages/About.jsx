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
      <div className="experience">
        <div className="experience-top">
          <h1>Navigating the Estatein Experience</h1>
          <p>
            At Estatein, we've designed a straightforward process to help you
            find and purchase your dream property with ease. Here's a
            step-by-step guide to how it all works.
          </p>
        </div>
        <div className="experience-bottom">
          <div className="experince-card">
            <div className="step">
              <h3>Step 01</h3>
            </div>
            <div className="card-info">
              <h2>Discover a World of Possibilities</h2>
              <p>
                Your journey begins with exploring our carefully curated
                property listings. Use our intuitive search tools to filter
                properties based on your preferences, including location, type,
                size, and budget.
              </p>
            </div>
          </div>
          <div className="experince-card">
            <div className="step">
              <h3>Step 02</h3>
            </div>
            <div className="card-info">
              <h2>Narrowing Down Your Choices</h2>
              <p>
                Once you've found properties that catch your eye, save them to
                your account or make a shortlist. This allows you to compare and
                revisit your favorites as you make your decision.
              </p>
            </div>
          </div>
          <div className="experince-card">
            <div className="step">
              <h3>Step 03</h3>
            </div>
            <div className="card-info">
              <h2>Personalized Guidance</h2>
              <p>
                Have questions about a property or need more information? Our
                dedicated team of real estate experts is just a call or message
                away.
              </p>
            </div>
          </div>
          <div className="experince-card">
            <div className="step">
              <h3>Step 04</h3>
            </div>
            <div className="card-info">
              <h2>See It for Yourself</h2>
              <p>
                Arrange viewings of the properties you're interested in. We'll
                coordinate with the property owners and accompany you to ensure
                you get a firsthand look at your potential new home.
              </p>
            </div>
          </div>
          <div className="experince-card">
            <div className="step">
              <h3>Step 05</h3>
            </div>
            <div className="card-info">
              <h2>Making Informed Decisions</h2>
              <p>
                Before making an offer, our team will assist you with due
                diligence, including property inspections, legal checks, and
                market analysis. We want you to be fully informed and confident
                in your choice.
              </p>
            </div>
          </div>
          <div className="experince-card">
            <div className="step">
              <h3>Step 06</h3>
            </div>
            <div className="card-info">
              <h2>Getting the Best Deal</h2>
              <p>
                We'll help you negotiate the best terms and prepare your offer.
                Our goal is to secure the property at the right price and on
                favorable terms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
