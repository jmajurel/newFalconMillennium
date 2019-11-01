import React from "react";
import Planet from "./Planet";

export default function PlanetsList({ planets, onHover }) {
  return (
    <div className="PlanetsList card-columns">
      {planets &&
        planets.map(planet => (
          <Planet
            key={planet._id}
            onHover={onHover}
            className="Planet"
            {...planet}
          />
        ))}
    </div>
  );
}
