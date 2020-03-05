import React from "react";
import brick from "../img/brick.jpg";

const Card = () => {
  return (
    <div className="card">
      <div>
        <img src="https://source.unsplash.com/random/200x200" alt="" />
      </div>
      <div className="lead">
        <p>Title</p>
        <p className="price">Price $29.00</p>
        <p>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star-o" aria-hidden="true"></i>
          <i className="fa fa-star-o" aria-hidden="true"></i>
          <span>(review)</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
