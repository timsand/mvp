import React from "react";
import actions from "../../actions/actions.js";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";


const ChangeRooms = ({ room }) => {
  const dispatch = useDispatch();
  const changeRoom = actions.changeRoom;
  return (
    <>
      <button
        onClick={() => {
          dispatch(changeRoom(room));
        }}
        className="movementsButton"
      >
        Click me to advance to the {room}
      </button>
    </>
  )
}

export default ChangeRooms;