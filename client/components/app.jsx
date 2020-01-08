import React from "react";
import { connect } from "react-redux";
import LandingPage from "./LandingPage.jsx";
// import FirstRoom from "./MainRooms/FirstRoom.jsx";
// import SecondRoom from "./MainRooms/SecondRoom.jsx";
// import ThirdRoom from "./MainRooms/ThirdRoom.jsx";
// import FourthRoom from "./MainRooms/FourthRoom.jsx";
// import LastRoom from "./MainRooms/LastRoom.jsx";
// import GuardRoom from "./SideRooms/GuardRoom.jsx";
import GameOver from "./GameOver.jsx";
import RoomRendering from "./RoomRendering.jsx";

const App = ({ landingPage, gameOver, playerHealth }) => {
  if (landingPage) {
    return <LandingPage />;
  }
  if (gameOver) {
    return <GameOver />;
  }
  return (
    <div>
      <div className="playerHealthContainer">
        <h3 className="playerHealthBar">Player Health</h3>
        <p className="playerHealthCount">{playerHealth}</p>
      </div>
      <RoomRendering />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    playerName: state.playerName,
    landingPage: state.landingPage,
    gameOver: state.gameOver,
    playerHealth: state.playerHealth
  };
};

export default connect(mapStateToProps)(App);
