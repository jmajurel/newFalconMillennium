import React from "react";
import Star from "./Star";

import "./StarsList.css";

export default function StarsList({ stars, handleStarHover }) {
  return (
    <div className="StarsList">
      {stars.map(star => (
        <Star key={star._id} {...star} handleStarHover={handleStarHover} />
      ))}
    </div>
  );
}
