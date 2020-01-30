import React from "react";
import actions from "../../actions/actions.js";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import ChangeRooms from "../Buttons/ChangeRooms.jsx";


const DialogueRoom = ({ playerName }) => {
  return (
    <div>
      <div id="textWrapperRoom">
        <p>
          There is a mysterious man in the corner {playerName}...
      </p>
      </div>
      <div className="movementsBar">
        <ChangeRooms room="FirstRoom" />
      </div>
    </div>
  )
}


const mapStateToProps = state => {
  return { playerName: state.playerName };
}

export default connect(mapStateToProps)(DialogueRoom);