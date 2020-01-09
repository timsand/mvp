import React from "react";
import { connect } from "react-redux";
import LandingPage from "./LandingPage.jsx";
import GameOver from "./GameOver.jsx";
import RoomRendering from "./RoomRendering.jsx";
import FightingRoom from "./FightingRoom/FightingRoom.jsx";
import Inventory from "./Inventory/Inventory.jsx";

const App = ({ landingPage, gameOver, playerHealth, isFighting }) => {
  if (landingPage) {
    return <LandingPage />;
  }
  if (gameOver) {
    return <GameOver />;
  }
  if (isFighting) {
    return <FightingRoom />;
  }
  return (
    <div>
      <div className="playerHealthContainer">
        <h3 className="playerHealthBar">Player Health</h3>
        <p className="playerHealthCount">{playerHealth}</p>
      </div>
      <Inventory />
      <RoomRendering />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    playerName: state.playerName,
    landingPage: state.landingPage,
    gameOver: state.gameOver,
    playerHealth: state.playerHealth,
    isFighting: state.isFighting
  };
};

export default connect(mapStateToProps)(App);
