import React from "react";
import { connect } from "react-redux";
// import FirstRoom from "./MainRooms/FirstRoom.jsx";
import FirstRoom from "./Tutorial/Main/FirstRoom.jsx";
// import SecondRoom from "./MainRooms/SecondRoom.jsx";
import SecondRoom from "./Tutorial/Main/SecondRoom.jsx";
import ThirdRoom from "./MainRooms/ThirdRoom.jsx";
import FourthRoom from "./MainRooms/FourthRoom.jsx";
import LastRoom from "./MainRooms/LastRoom.jsx";
import GuardRoom from "./SideRooms/GuardRoom.jsx";
import PantryRoom from "./SideRooms/PantryRoom.jsx";
import TestCharacterSpeech from "./SideRooms/TestCharacterSpeech.jsx";
import TutorialStart from "./Tutorial/Main/TutorialStart.jsx";
import SecondRoomLootSide from "./Tutorial/SideRooms/SecondRoomLootSide.jsx";
import ThirdRoomA from "./Tutorial/Main/ThirdRoomA.jsx";
import FourthRoomA from "./Tutorial/Main/FourthRoomA.jsx";

const App = ({ currentRoom }) => {
  switch (currentRoom) {
    case "TutorialStart":
      return (
        <div>
          <TutorialStart />
        </div>
      )
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
    case "SecondRoomLootSide":
      return (
        <div>
          <SecondRoomLootSide />
        </div>
      )
    case "GuardRoom":
      return (
        <div>
          <GuardRoom />
        </div>
      );
    case "ThirdRoomA":
      return (
        <div>
          <ThirdRoomA />
        </div>
      );
    case "FourthRoomA":
      return (
        <div>
          <FourthRoomA />
        </div>
      );
    case "TestCharacterSpeech":
      return (
        <div>
          <TestCharacterSpeech />
        </div>
      )
    case "PantryRoom":
      return (
        <div>
          <PantryRoom />
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
    playerName: state.player.playerName
  };
};

export default connect(mapStateToProps)(App);
