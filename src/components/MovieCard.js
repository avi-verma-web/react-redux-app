import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Link } from "react-router-dom";

import { fab, faImdb, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="col-md-3 mb-5">
        <div className="card card-body bg-dark text-center h-100">
          <img
            className="w-100 mb-2"
            src={movie.Poster}
            alt="Movie Cover"
          ></img>
          <h5 className="text-light card-title">
            {movie.Title} - {movie.Year}
          </h5>
          <Link className="btn btn-primary" to={"/movie/" + movie.imdbID}>
            Movie Details{' '}
            <FontAwesomeIcon icon={ faChevronRight}></FontAwesomeIcon>
          </Link>
        </div>
      </div>
    );
  }
}

export default MovieCard;
