import React, { Component, Fragment } from "react";
import { Header, Footer } from "./components/layouts/index";
import Exercises from "./components/Exercises/index";
import { muscles, exercises } from "./store.js";

import "./App.css";

class App extends Component {
  state = {
    exercises
  };

  getExercisesByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];

        return exercises;
      }, {})
    );
  }

  handleCategorySelected = category => {
    this.setState({
      category
    });
  };

  render() {
    const exercises = this.getExercisesByMuscles(),
      { category } = this.state;

    return (
      <Fragment>
        <Header />
        <Exercises category={category} exercises={exercises} />
        <Footer
          category={category}
          muscles={muscles}
          onSelect={this.handleCategorySelected}
        />
      </Fragment>
    );
  }
}

export default App;
