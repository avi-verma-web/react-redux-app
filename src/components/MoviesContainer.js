import React, { Component } from "react";

import { connect } from "react-redux";
import MovieCard from "./MovieCard";

import noresult from './noresult.png'

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});

export class MoviesContainer extends Component {
  render() {
    const { movies } = this.props;
    console.log(movies);
    let content = "";
    content =
      movies !== undefined
        ? movies.map((movie, index) => (
            <MovieCard key={index} movie={movie}></MovieCard>
          ))
        : <img style={{paddingLeft:"35%"}} src={noresult} alt="No result"></img>;

    return <div className="row">{content}</div>;
  }
}

export default connect(mapStateToProps)(MoviesContainer);
