import React from "react";
import actions from "../../actions/actions.js";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";

const FourthRoom = () => {
  const dispatch = useDispatch();
  const changeRoom = actions.changeRoom;
  return (
    <div>
      <p>In the fourth room...</p>
      <div className="movementsBar">
        <button
          onClick={() => {
            dispatch(changeRoom("LastRoom"));
          }}
          className="movementsButton"
        >
          Proceed to the final room...
        </button>
      </div>
    </div>
  );
};

export default FourthRoom;
