import React from "react";
import Card from "./Card";
const Services = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <h1 className="text-center">Services page </h1>
            <hr />
            <div className=" justify-content-evenly  flex-wrap d-flex flex-row">
              <Card
                name="Android Development"
                link="https://images.ctfassets.net/23aumh6u8s0i/70j8cuqWIh4IceIXGsUpM5/b665404e5d1813e4574032081a33dfdb/android_hero_2021_1.jpg"
              />
              <Card
                name="Web Development With PHP"
                link="https://media.istockphoto.com/photos/inscription-against-laptop-and-code-background-learn-php-programming-picture-id1297752994?k=20&m=1297752994&s=612x612&w=0&h=P5G1s2qN858dvmQb-dg_xKW6jmCHiFznTxEiH__tD5o="
              />
              <Card
                name="Machain Learning"
                link="https://media.istockphoto.com/photos/future-artificial-intelligence-robot-and-cyborg-picture-id1263629792?k=20&m=1263629792&s=612x612&w=0&h=-fwq6LAUiPSCYq4PtNu5ervaLCduxSVlbBijRK9B6tc="
              />
              <Card
                name="Artificial intelligence"
                link="https://media.istockphoto.com/photos/concept-futuristic-robot-hand-touching-digital-world-globe-map-3d-picture-id1270372838?k=20&m=1270372838&s=612x612&w=0&h=HR6ggygFdejSQvesqGLW5QWvINh5CJU5E3_NWAZQAEM="
              />
              <Card
                name="Web Development With MERN Stack"
                link="https://miro.medium.com/max/1400/0*GKIyAWHbKbANm7d9.png"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
