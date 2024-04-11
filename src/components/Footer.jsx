import React from "react";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="section">
          <ul>
            <li>
              <img src="imgs/logo.svg" alt="" />
            </li>
            <div className="email">
              <img src="imgs/icon-one.png" alt="" />
              <input type="text" placeholder="Enter Your Email" />
              <img src="imgs/icon-two.png" alt="" />
            </div>
          </ul>
        </div>
        <div className="section">
          <p>Home</p>
          <ul>
            <li>Hero Section</li>
            <li>Features</li>
            <li>Properties</li>
            <li>Testimonials</li>
            <li>FAQ’s</li>
          </ul>
        </div>
        <div className="section">
          <p>About Us</p>

          <ul>
            <li>Our Story</li>
            <li>Our Works</li>
            <li>How It Works</li>
            <li>Our Team</li>
            <li>Our Clients</li>
          </ul>
        </div>
        <div className="section">
          <p>Properties</p>

          <ul>
            <li>Portfolio</li>
            <li>Categories</li>
          </ul>
        </div>
        <div className="section">
          <p>Services</p>

          <ul>
            <li>Valuation Mastery</li>
            <li>Strategic Marketing</li>
            <li>Negotiation Wizardry</li>
            <li>Closing Success</li>
            <li>Property Management</li>
          </ul>
        </div>
        <div className="section">
          <p>Contact Us</p>

          <ul>
            <li>Contact Form</li>
            <li>Our Offices</li>
          </ul>
        </div>
      </div>
   
      <div className="end">
        <p>@2023 Estatein. All Rights Reserved.Terms & Conditions</p>
        <div className="logo-container">
          <img src="imgs/social-icon.svg" alt="" />
        </div>
      </div>
    </>
  );
}

export default Footer;
