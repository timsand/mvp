import React from "react";
import { connect, useDispatch } from "react-redux";
import ChangeRooms from "../../Buttons/ChangeRooms.jsx";
import BaseRoom from "../../MainRooms/BaseRoom.jsx";

const TutorialStart = ({ playerName, roomVariables }) => {
  let roomText =
    roomVariables.visited === false
      ? `A splitting headache... A ravenous hunger... The journey begins ${playerName}...`
      : `It's the grave that you were dug out of... just looking at it gives you shivers..`;
  return (
    <div>
      <BaseRoom roomText={roomText} />
      <ChangeRooms currentRoom="TutorialStart" nextRoom="FirstRoom" />
    </div>
  )
}

const mapStateToProps = state => {
  return { roomVariables: state.roomVariables.TutorialStart, playerName: state.player.playerName }
}

export default connect(mapStateToProps)(TutorialStart);