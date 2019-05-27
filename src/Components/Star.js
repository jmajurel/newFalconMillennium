import React from "react";
import "./Star.css";

const Star = ({ _id: id, name, color, handleStarHover }) => (
  <div
    className="Star"
    onHover={e => handleStarHover(e, id)}
    style={{ backgroundColor: `#${Number(color).toString(16)}` }}
  >
    {name}
  </div>
);

export default Star;
