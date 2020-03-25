import React from "react";
import { connect } from "react-redux";
import BaseRoom from "../../MainRooms/BaseRoom.jsx";
import ChangeRooms from "../../Buttons/ChangeRooms.jsx";
import roomText from "../../../textFiles/roomText.js";


const FourthRoomA = () => {



  return (
    <div>
      <BaseRoom roomText={roomText.fourthRoomAText} />
      <ChangeRooms mapMany={["FourthRoomA", "ThirdRoomA", "FourthRoomB"]} />
    </div>
  )
}


const mapStateToProps = state => {
  return { playerName: state.player.playerName };
}

export default connect(mapStateToProps)(FourthRoomA);