import React from "react";
import actions from "../../actions/actions.js";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";

const FirstRoom = ({ playerName }) => {
  const dispatch = useDispatch();
  const changeRoom = actions.changeRoom;
  return (
    <div>
      <p>You are in the FirstRoom {playerName}</p>
      <button
        onClick={() => {
          dispatch(changeRoom("SecondRoom"));
        }}
      >
        Click me to advance to the Second Room
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return { playerName: state.playerName };
};

export default connect(mapStateToProps)(FirstRoom);
