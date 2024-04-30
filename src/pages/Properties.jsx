import React from "react";

function Properties() {
  return (
    <>
      <div className="home-property container">
        <h1>Find Your Dream Property</h1>
        <p>
          Welcome to Estatein, where your dream property awaits in every corner
          of our beautiful world. Explore our curated selection of properties,
          each offering a unique story and a chance to redefine your life. With
          categories to suit every dreamer, your journey{" "}
        </p>
      </div>
      <div className="sup-box">
        <div className="search">
          <input type="text" placeholder="Search For A Property" />
          <button>Find Property</button>
        </div>
        <div className="property-box">
          <select name="" id="">
            <option value="Location">Location</option>
            <option value="Location">Location</option>
          </select>
          <select name="" id="">
            <option value="Property Type">Property Type</option>
            <option value="Property Type">Property Type</option>
          </select>
          <select name="" id="">
            <option value="Pricing Range">Pricing Range</option>
            <option value="Pricing Range">Pricing Range</option>
          </select>
          <select name="" id="">
            <option value="Property Size">Property Size</option>
            <option value="Property Size">Property Size</option>
          </select>
          <select name="" id="">
            <option value="Build Year">Build Year</option>
            <option value="Build Year">Build Year</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default Properties;
