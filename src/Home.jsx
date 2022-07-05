import React from "react";
import HomeImage from "./images/HomeImage.jpg";
const Home = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="container">
              <div className="row">
                <div className="col d-flex align-items-center justify-content-center">
                  <h1 style={{ color: "Blue" }}>Home </h1>
                </div>
                <div className="col ">
                  <img
                    src={HomeImage}
                    alt="homeImage"
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

export default Home;
