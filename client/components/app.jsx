import React from "react";
import { connect } from "react-redux";
import Axios from "axios";
import LandingPage from "./LandingPage.jsx";
import GameOver from "./GameOver.jsx";
import RoomRendering from "./RoomRendering.jsx";
import FightingRoom from "./FightingRoom/FightingRoom.jsx";
import Inventory from "./Inventory/Inventory.jsx";

const App = ({ landingPage, gameOver, playerHealth, isFighting, state }) => {
  const saveData = () => {
    Axios.post("/save", state)
      .then(() => {
        console.log(state);
        console.log("success");
      })
      .catch(() => {
        console.log("error");
      });
  };

  const loadData = () => {
    Axios.get("/save")
      .then(data => {
        data = data.data;
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  };

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
      <div id="mainSidebar">
        <div className="playerHealthContainer">
          <h3 className="playerHealthBar">Player Health</h3>
          <p className="playerHealthCount">{playerHealth}</p>
        </div>
        <Inventory />
      </div>
      <div id="roomMasterContainer">
        <RoomRendering />
      </div>
      <div id="utilityBar">
        <button
          onClick={() => {
            saveData();
          }}
        >
          Save
        </button>
        <button
          onClick={() => {
            loadData();
          }}
        >
          Load
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    playerName: state.playerName,
    landingPage: state.landingPage,
    gameOver: state.gameOver,
    playerHealth: state.playerHealth,
    isFighting: state.isFighting,
    state: state
  };
};

export default connect(mapStateToProps)(App);
