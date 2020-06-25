import React from "react";

class Help extends React.Component {
  constructor(props) {
    super(props);

    this.help = this.help.bind(this);
  }
  //this function lets user know how to play the game

  help() {
    let button = document.getElementById("helpButton");
    //disables the button so that the user cannot press it repeatedly
    button.disabled = "true";

    let rulesDiv = document.getElementById("rulesDiv");

    //showing user that they have won
    let messageHeader = document.createElement("H2");
    let message = document.createElement("p");

    message.innerHTML =
      "In order to win ,You must click all the buttons that do not have a mine , if you do hit a mine , you will have to restart to play again. #Bonus tip , memorize where you click so that you dont hit a mine when you restart ";
    messageHeader.innerHTML = "How to Play";
    rulesDiv.appendChild(messageHeader);
    rulesDiv.appendChild(message);
  }

  render() {
    return (
      <header>
        <h2>Help?</h2>

        <button class="componentButton" id="helpButton" onClick={this.help}>
          {" "}
          Help{" "}
        </button>
        <div id="rulesDiv"></div>
      </header>
    );
  }
}

export default Help;
