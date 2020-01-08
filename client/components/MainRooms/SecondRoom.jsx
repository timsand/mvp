import React from "react";
// import GuardRoom from "../SideRooms/GuardRoom.jsx";
import actions from "../../actions/actions.js";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";

const SecondRoom = () => {
  const dispatch = useDispatch();
  const changeRoom = actions.changeRoom;
  return (
    <div>
      <p>In the second room...</p>
      <div className="movementsBar">
        <button
          onClick={() => {
            dispatch(changeRoom("ThirdRoom"));
          }}
          className="movementsButton"
        >
          Proceed to room 3
        </button>
        <button
          onClick={() => {
            dispatch(changeRoom("GuardRoom"));
          }}
          className="movementsButton"
        >
          Proceed to GuardRoom
        </button>
      </div>
    </div>
  );
};

export default SecondRoom;
