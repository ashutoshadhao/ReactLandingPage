import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="card m-4 shadow" style={{ width: "18rem" }}>
        <img
          src={props.link}
          className="card-img-top"
          alt="im"
          width={"200px"}
          height={"220px"}
        />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut atque
            nostrum odio accusantium magni quis quos assumenda iste sed, totam
            ab natus aperiam est, ad blanditiis tempore. Facilis, ab?
          </p>
          <NavLink
            to="#"
            className="btn btn-primary position-absolute top-100 start-50 translate-middle"
          >
            BUY NOW
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Card;
