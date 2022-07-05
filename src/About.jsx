import React from "react";
import AboutImage from "./images/AboutImage.jpg";
const About = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="container">
              <div className="row">
                <div className="col d-flex align-items-center justify-content-center">
                  <h1> About Us </h1>
                </div>
                <div className="col">
                  <img
                    src={AboutImage}
                    alt="AboutImage"
                    width={"500px"}
                    height={"500px"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
