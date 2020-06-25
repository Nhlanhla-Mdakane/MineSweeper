import React, { Component } from "react";

import "./App.css";

import Mines from "./components/Mines";
import Retry from "./components/Retry";
import Help from "./components/Help";
//initialising counter variable
let newCount = 0;
class App extends Component {
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.counter = this.counter.bind(this);

    //In the constructor we initialise the state.
    this.state = { input: 0 };
  }

  //this function updates the state based on how many times the user presses the correct button
  counter(count) {
    this.setState({ input: count });

    newCount = newCount + parseInt(count);
  }

  render() {
    return (
      <div class="mineDivFront">
        <h2 id="title">Mine Sweeper</h2>

        <Mines onCounter={this.counter} newCountAmount={newCount} />

        <Retry newCountAmount={newCount} />

        <Help />
      </div>
    );
  }
}

export default App;
