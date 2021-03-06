import React from "react";
import "./Planet.css";

const Planet = ({ picture, name, type, onHover }) => (
  <div
    className={`Planet card ${
      type === "solid" ? "bg-planet-solid" : "bg-planet-gas"
    }`}
    onMouseOver={e => onHover(e, name)}
  >
    <h5 className="card-title">{name}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{type}</h6>
    <img className="card-img-top" src={picture} alt={name} />
  </div>
);

export default Planet;
