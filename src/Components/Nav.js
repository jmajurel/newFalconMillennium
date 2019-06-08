import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import Icon from "../Illustrations/icon.png";

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <Link className="navbar-brand" to="/">
      <img src={Icon} alt="Falcon" />
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="">
            Home <span className="sr-only">(current)</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/planets">
            Planets
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/stars">
            Stars
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/galaxy">
            Galaxy
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);
export default Nav;
