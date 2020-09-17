import React from "react";
// import logo from './logo.svg';
import "./App.css";

import store from "./redux/Store";
import { Provider } from "react-redux";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Movie from "./components/Movie";

import { HashRouter, Route } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <div>
          <Navbar></Navbar>
          <Route exact path="/" component={Landing}></Route>
          <Route exact path="/movie/:id" component={Movie}></Route>
          <Footer></Footer>
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
