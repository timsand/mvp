import React from "react";
import actions from "../../actions/actions.js";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";

const GuardRoom = () => {
  const dispatch = useDispatch();
  const changeRoom = actions.changeRoom;
  return (
    <div>
      <p>
        A guard is snoozing against a chair. His sword is yours for the taking!
      </p>
      <div className="specialActions"></div>
      <div className="movementsBar">
        <button
          onClick={() => {
            dispatch(changeRoom("SecondRoom"));
          }}
          className="movementsButton"
        >
          Proceed to room 4
        </button>
      </div>
    </div>
  );
};

export default GuardRoom;
