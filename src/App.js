import React, { Component, Fragment } from "react";
import { Header, Footer } from "./components/layouts/index";
import Exercises from "./components/Exercises/index";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Exercises />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
