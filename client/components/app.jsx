import React from "react";
import { connect } from "react-redux";
import LandingPage from "./LandingPage.jsx";
import FirstRoom from "./rooms/FirstRoom.jsx";
import SecondRoom from "./rooms/SecondRoom.jsx";

const App = ({ currentRoom, landingPage }) => {
  if (landingPage) {
    return <LandingPage />;
  }
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
  return {
    currentRoom: state.currentRoom,
    playerName: state.playerName,
    playerMap: state.playerMap,
    landingPage: state.landingPage
  };
};

export default connect(mapStateToProps)(App);
