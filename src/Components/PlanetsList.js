import React from "react";
import Planet from "./Planet";

export default function PlanetsList({ planets }) {
  return (
    <div className="PlanetsList card-columns">
      {
        planets &&
        planets.map(planet => (
          <Planet key={planet._id} className="Planet" {...planet} />
        ))
      }
    </div>
  );
}
