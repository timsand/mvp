import React from "react";
import { connect } from "react-redux";
import BaseRoom from "../../MainRooms/BaseRoom.jsx";
import ChangeRooms from "../../Buttons/ChangeRooms.jsx";
import roomText from "../../../textFiles/roomText.js"


const ThirdRoomA = () => {

  return (
    <div>
      <BaseRoom roomText={roomText.thirdRoomAText} />
      <ChangeRooms mapMany={["ThirdRoomA", "SecondRoom", "FourthRoomA"]} />
    </div>
  )
}


const mapStateToProps = state => {
  return { playerName: state.player.playerName }
}

export default connect(mapStateToProps)(ThirdRoomA);