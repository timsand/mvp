import React from "react";
import { connect } from "react-redux";
import LandingPage from "./LandingPage.jsx";
import FirstRoom from "./MainRooms/FirstRoom.jsx";
import SecondRoom from "./MainRooms/SecondRoom.jsx";
import ThirdRoom from "./MainRooms/ThirdRoom.jsx";
import FourthRoom from "./MainRooms/FourthRoom.jsx";
import LastRoom from "./MainRooms/LastRoom.jsx";
import GuardRoom from "./SideRooms/GuardRoom.jsx";
import GameOver from "./GameOver.jsx";

const App = ({ currentRoom, landingPage, gameOver, playerHealth }) => {
  if (landingPage) {
    return <LandingPage />;
  }
  if (gameOver) {
    return <GameOver />;
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
    case "GuardRoom":
      return (
        <div>
          <GuardRoom />
        </div>
      );
    case "ThirdRoom":
      return (
        <div>
          <ThirdRoom />
        </div>
      );
    case "FourthRoom":
      return (
        <div>
          <FourthRoom />
        </div>
      );
    case "LastRoom":
      return (
        <div>
          <LastRoom />
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
    landingPage: state.landingPage,
    gameOver: state.gameOver,
    playerHealth: state.playerHealth
  };
};

export default connect(mapStateToProps)(App);
