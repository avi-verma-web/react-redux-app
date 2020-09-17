import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

// import { fab, faImdb, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { connect } from "react-redux";
import {
  searchMovie,
  fetchMovies,
  setLoading,
} from "../redux/movies/searchActions";

const mapStateToProps = (state) => ({
  text: state.movies.text,
});

export class SearchForm extends Component {
  onChange = (e) => {
    console.log(this.props);
    this.props.searchMovie(e.target.value);
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.props);
    this.props.fetchMovies(this.props.text);
    this.props.setLoading()
  };
  render() {
    return (
      <div style={{backgroundColor:"gray",borderRadius:10}} className="jumbotron jumbotron-fluid mt-5 text-center jumb">
        <div className="container">
          <h1 className="display-4 mb-3">
            <FontAwesomeIcon icon={faSearch} />
            Search for a movies,TV series..
          </h1>
          <form id="searchForm" onSubmit={this.onSubmit}>
            <input
              type="text"
              className="form-control"
              name="searchText"
              placeholder="Search Movies, TV Series..."
              onChange={this.onChange}
            ></input>
            <button type="submit" className="btn btn-primary btn-bg mt-3">
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, { searchMovie, fetchMovies,setLoading })(
  SearchForm
);
