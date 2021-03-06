import React from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import Axios from "axios";
import LandingPage from "./LandingPage.jsx";
import GameOver from "./GameOver.jsx";
import RoomRendering from "./RoomRendering.jsx";
import FightingRoom from "./FightingRoom/FightingRoom.jsx";
import Inventory from "./Inventory/Inventory.jsx";
import actions from "../actions/actions.js";

const App = ({ landingPage, gameOver, playerHealth, isFighting, state }) => {
  const dispatch = useDispatch();

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
        dispatch(actions.loadData(data));
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
          <div id="playerHealthIconWrapper">
            <p className="playerHealthCount">{playerHealth}</p>
            <h3 className="playerHealthBar">Player Health - </h3>
            <div id="playerHealthIcon"></div>
          </div>
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
    playerName: state.player.playerName,
    landingPage: state.landingPage,
    gameOver: state.gameOver,
    playerHealth: state.player.playerHealth,
    isFighting: state.isFighting,
    state: state
  };
};

export default connect(mapStateToProps)(App);
