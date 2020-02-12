import React from "react";
import { connect, useDispatch } from "react-redux";
import BaseRoom from "../../MainRooms/BaseRoom.jsx";
import ChangeRooms from "../../Buttons/ChangeRooms.jsx";


const FirstRoom = () => {
  const roomText = `You hear a strange growling sound ahead...`
  return (
    <div>
      <BaseRoom roomText={roomText} />
      <ChangeRooms currentRoom="FirstRoom" nextRoom="SecondRoom" />
    </div>
  )
}

const mapStateToProps = state => {
  return { playerName: state.player.playerName }
}

export default connect(mapStateToProps)(FirstRoom);