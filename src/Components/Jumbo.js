import React from "react";

const inLineStyle = {
  backgroundImage:
    "url(https://ak1.picdn.net/shutterstock/videos/4729091/thumb/2.jpg)",
  backgroundSize: "cover",
  backgroundRepeat: "norepeat",
  backgroundPosition: "center-bottom"
};

const Jumbo = () => (
  <div className="Jumbo jumbotron" style={inLineStyle}>
    <h1 className="display-4">My Falcon</h1>
    <p className="lead">Travel through space using your web browser</p>
  </div>
);

export default Jumbo;
