import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import welcomePicture from "../Illustrations/welcomePicture.jpg";

export default function Home() {
  return (
    <div className="Home" style={{ backgroundImage: `url(${welcomePicture})` }}>
      <div className="app-welcome">
        <h1 className="app-title">My Falcon</h1>
        <h3>Travel through space</h3>
        <h3>Using your web browser</h3>
        <Link to="/planets" className="app-button">
          Check it out !
        </Link>
      </div>
    </div>
  );
}
