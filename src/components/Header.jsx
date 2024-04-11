import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <div className="discover">
        <button className="discover-btn">
          Discover Your Dream Property with Estatein <a href="">Learn More</a>
        </button>
        <img src="imgs/button.svg" alt="" />
      </div>
      <header>
        <div className="logo">
          <img src="imgs/logo.svg" alt="" />
        </div>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About Us</Link>
            </li>
            <li>Properties</li>
            <li>Services </li>
          </ul>
          <button>Contact Us</button>
        </nav>
      </header>
    </>
  );
}

export default Header;
