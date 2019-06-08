import React from "react";
import "./Tooltip.css";

const Tooltip = ({ _id: id, name }) => (
  <div className="Tooltip">
    <h5>Name: {id}</h5>
  </div>
);

export default Tooltip;
