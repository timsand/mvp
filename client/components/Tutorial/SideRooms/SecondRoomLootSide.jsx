import React from "react";
import { connect, useDispatch } from "react-redux";
import ChangeRooms from "../../Buttons/ChangeRooms.jsx";
import BaseRoom from "../../MainRooms/BaseRoom.jsx";
import items from "../../../items/items.js"
import actions from "../../../actions/actions.js"

const SecondRoomLootSide = ({ roomVariables }) => {
  const dispatch = useDispatch();
  const addItem = actions.addItem;
  const roomText = roomVariables.visited ? `There is nothing more for you here...` : `You know that this isn't where you're supposed to be going... Before you leave you spot a small weapon on the ground`;

  if (!roomVariables.visited) {
    dispatch(addItem(items.dagger));
  }

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