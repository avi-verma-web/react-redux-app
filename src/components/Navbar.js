import React from "react";

import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import { fab, faImdb, faReact, faAccusoft } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";


function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <div className="container">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand text-white text-lg brand-text">
            <FontAwesomeIcon icon={faAccusoft} size="5x" className="imdblogo" /><h3>Avinash's Movie-Info</h3>
            </Link>
          </div>

          <ul className="navbar-nav ml-auto text-light d-inline-block">

            <li className="nav-item d-inline-block mr-4">
              <FontAwesomeIcon icon={faReact} size="5x" className="reactlogo" />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
