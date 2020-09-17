import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { fab, faImdb, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="footer p-3 mt-4 text-center bg-dark text-light">
          DEVELOPED BY:
          <span className="text-warning font-weight-normal">
            {" "}
            Avinash Verma
          </span>
          . Using
          <FontAwesomeIcon icon={faReact} size="5x" /> React JS &amp; Redux JS
          integrated with external movies data API
          <a
            href="http://www.omdbapi.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            {" "}
            OMDB.
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
