import React from "react";

class Mines extends React.Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.unsafe = this.unsafe.bind(this);
    this.safe = this.safe.bind(this);
    this.list = this.list.bind(this);
  }
  //this list is an example of a list with a key, i dont have a particular use for one in this game yet but if i get an idea, i will use it
  list() {
    let numbers = [0, this.props.newCountAmount];
    let listItems = numbers.map((number) => (
      <li key={number.toString()}>{number}</li>
    ));
  }
  //this function gets the button that is clicked, changes it's colour and disables it,
  //it also sends data to the parent class so it can update the state
  //it also checks if the user has pressed enough correct buttons to win
  safe(e) {
    let button = document.getElementById(e.target.value);
    button.style.backgroundColor = "#0781ad";
    button.style.color = "#0781ad";

    button.disabled = "true";
    let count = 1;
    //sending count to parent class so it can update the  variable
    this.props.onCounter(count);
    //condition for when the user wins
    if (this.props.newCountAmount === 19) {
      let winDiv = document.getElementById("result");
      let mines = document.getElementById("mineDiv");

      mines.style.display = "none";
      //showing user that they have won
      let messageHeader = document.createElement("H2");
      let message = document.createElement("p");

      message.innerHTML =
        "Congratulations , you have won!  press  restart to play again";
      messageHeader.innerHTML = "You Win ! :)";
      winDiv.appendChild(messageHeader);
      winDiv.appendChild(message);
    }
  }
  //this function lets the user know that they have lost
  unsafe(e) {
    let winDiv = document.getElementById("result");
    let mines = document.getElementById("mineDiv");

    mines.style.display = "none";
    //showing user that they have won
    let messageHeader = document.createElement("H2");
    let message = document.createElement("p");

    message.innerHTML =
      "Unfortunately you have lost!  press  restart to try again";
    messageHeader.innerHTML = "You Lose ! :(";
    winDiv.appendChild(messageHeader);
    winDiv.appendChild(message);
  }

  //this are all the mines
  render() {
    return (
      <header className="">
        <div id="mineDiv">
          <div class="mineRow">
            <button class="safeMine " onClick={this.unsafe} value="1" id="1">
              {" "}
            </button>
            <button class="safeMine " onClick={this.safe} value="2" id="2">
              {" "}
            </button>
            <button class="safeMine " onClick={this.safe} value="3" id="3">
              {" "}
            </button>
            <button class="safeMine " onClick={this.safe} value="4" id="4">
              {" "}
            </button>
            <button class="safeMine " onClick={this.safe} value="5" id="5">
              {" "}
            </button>
          </div>

          <div class="mineRow">
            <button class="safeMine " onClick={this.safe} value="6" id="6">
              {" "}
            </button>
            <button class="safeMine " onClick={this.safe} value="7" id="7">
              {" "}
            </button>
            <button class="safeMine " onClick={this.unsafe} value="8" id="8">
              {" "}
            </button>
            <button class="safeMine " onClick={this.safe} value="9" id="9">
              {" "}
            </button>
            <button class="safeMine " onClick={this.safe} value="10" id="10">
              {" "}
            </button>
          </div>
          <div class="mineRow">
            <button class="safeMine " onClick={this.safe} value="11" id="11">
              {" "}
            </button>
            <button class="safeMine " onClick={this.safe} value="12" id="12">
              {" "}
            </button>
            <button class="safeMine " onClick={this.unsafe} value="13" id="13">
              {" "}
            </button>
            <button class="safeMine " onClick={this.safe} value="14" id="14">
              {" "}
            </button>
            <button class="safeMine " onClick={this.safe} value="15" id="15">
              {" "}
            </button>
          </div>
          <div class="mineRow">
            <button class="safeMine " onClick={this.safe} value="16" id="16">
              {" "}
            </button>
            <button class="safeMine " onClick={this.safe} value="17" id="17">
              {" "}
            </button>
            <button class="safeMine " onClick={this.safe} value="18" id="18">
              {" "}
            </button>
            <button class="safeMine " onClick={this.unsafe} value="19" id="19">
              {" "}
            </button>
            <button class="safeMine " onClick={this.safe} value="20" id="20">
              {" "}
            </button>
          </div>

          <div class="mineRow">
            <button class="safeMine " onClick={this.safe} value="21" id="21">
              {" "}
            </button>
            <button class="safeMine " onClick={this.safe} value="22" id="22">
              {" "}
            </button>
            <button class="safeMine " onClick={this.safe} value="23" id="23">
              {" "}
            </button>
            <button class="safeMine " onClick={this.safe} value="24" id="24">
              {" "}
            </button>
            <button class="safeMine " onClick={this.safe} value="25" id="25">
              {" "}
            </button>
          </div>
        </div>
        <div id="result"></div>
      </header>
    );
  }
}

export default Mines;
