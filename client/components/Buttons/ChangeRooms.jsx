import React from "react";
import actions from "../../actions/actions.js";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";


const ChangeRooms = ({ currentRoom, nextRoom }) => {
  const dispatch = useDispatch();
  const changeRoom = actions.changeRoom;
  const visit = actions.visit;
  return (
    <div className="movementsBar">
      <button
        onClick={() => {
          dispatch(changeRoom(nextRoom));
          dispatch(visit(`VISIT_${currentRoom}`))
        }}
        className="movementsButton"
      >
        Click me to advance to the {nextRoom}
      </button>
    </div>
  )
}

export default ChangeRooms;