import React from "react";

class Retry extends React.Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback

    this.retry = this.retry.bind(this);
  }
  //this reloads the page when th restart button is pressed
  retry() {
    window.location.reload();
  }

  render() {
    return (
      <header>
        <div id="retryDiv">
          <h2>Score</h2>
          <h3>{this.props.newCountAmount}</h3>

          <button class="componentButton" onClick={this.retry}>
            Restart
          </button>
        </div>
      </header>
    );
  }
}

export default Retry;
