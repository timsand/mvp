import React from "react";
import { connect, useDispatch } from "react-redux";
import ChangeRooms from "../../Buttons/ChangeRooms.jsx";
import BaseRoom from "../../MainRooms/BaseRoom.jsx";

const SecondRoomLootSide = ({ roomVariables }) => {
  const roomText = roomVariables.visited ? `You know that this isn't where you're supposed to be going... Before you leave you spot a small weapon on the ground` : `There is nothing more for you here...';`
  return (
    <div>
      <BaseRoom roomText={roomText} />
      <ChangeRooms currentRoom="SecondRoomLootSide" nextRoom="SecondRoom" />
    </div>
  )
}


const mapStateToProps = state => {
  return { roomVariables: state.roomVariables.SecondRoomLootSide };
}

export default connect(mapStateToProps)(SecondRoomLootSide);