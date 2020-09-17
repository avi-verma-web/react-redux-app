import React, { Component } from "react";

import { connect } from "react-redux";

import SearchForm from "./searchForm";
import Spinner from "./Spinner";
import MoviesContainer from "./MoviesContainer";

const mapStateToProps = (state) => ({
  loading: state.movies.loading,
});

export class Landing extends Component {
  render() {
    const { loading } = this.props;
    return (
      <div className="container">
        <SearchForm></SearchForm>
        {loading ? <Spinner></Spinner> : <MoviesContainer></MoviesContainer>}
      </div>
    );
  }
}

export default connect(mapStateToProps)(Landing);
