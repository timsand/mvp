import React from "react";
import actions from "../../actions/actions.js";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";

const ThirdRoom = () => {
  const dispatch = useDispatch();
  const changeRoom = actions.changeRoom;
  return (
    <div>
      <p>In the third room...</p>
      <div className="movementsBar">
        <button
          onClick={() => {
            dispatch(changeRoom("FourthRoom"));
          }}
          className="movementsButton"
        >
          Proceed to room 4
        </button>
      </div>
    </div>
  );
};

export default ThirdRoom;
