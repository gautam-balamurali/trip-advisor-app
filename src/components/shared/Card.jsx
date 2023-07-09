import React from "react";
import { MdLocationPin } from "react-icons/md";

import "./Card.css";

const Card = ({ name, image }) => {
  return (
    <div className="card">
      <div className="card-cover">
        <img src={image} loading="lazy" alt={name} />
      </div>
      <div className="card-content">
        <h2 className="card-title">
          <MdLocationPin />
          {name}
        </h2>
      </div>
    </div>
  );
};

export default Card;
