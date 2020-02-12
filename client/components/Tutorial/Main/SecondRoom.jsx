import React from "react";
import { connect, useDispatch } from "react-redux";
import ChangeRooms from "../../Buttons/ChangeRooms.jsx";
import BaseRoom from "../../MainRooms/BaseRoom.jsx";

const SecondRoom = ({ playerName }) => {
  const roomText = `There is a ferocious creature ahead of you ${playerName}!!!`
  return (
    <div>
      <BaseRoom roomText={roomText} />
      <ChangeRooms currentRoom="SecondRoom" nextRoom="TutorialStart" />
    </div>
  )
}

const mapStateToProps = state => {
  return { playerName: state.player.playerName };
}

export default connect(mapStateToProps)(SecondRoom);