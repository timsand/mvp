import React from "react";
import { connect } from "react-redux";
import FirstRoom from "./rooms/FirstRoom.jsx";
import SecondRoom from "./rooms/SecondRoom.jsx";

const App = ({ currentRoom }) => {
  console.log(currentRoom);
  switch (currentRoom) {
    case "FirstRoom":
      return (
        <div>
          <FirstRoom />
        </div>
      );
    case "SecondRoom":
      return (
        <div>
          <SecondRoom />
        </div>
      );
    default:
      return (
        <div>
          <p>This will work!</p>
        </div>
      );
  }
};

const mapStateToProps = state => {
  return { currentRoom: state.currentRoom, playerName: state.playerName };
};

export default connect(mapStateToProps)(App);
