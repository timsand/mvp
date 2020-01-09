import React from "react";
import actions from "../../actions/actions.js";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import roomText from "../../textFiles/roomText.js";

const FirstRoom = ({ playerName }) => {
  const dispatch = useDispatch();
  const changeRoom = actions.changeRoom;
  console.log(roomText);
  return (
    <div>
      <div id="textWrapperRoom">
        <p>
          You are in the FirstRoom {playerName}
          <br></br>
          <br></br>
          {roomText.roomOneText}
        </p>
      </div>
      <div className="movementsBar">
        <button
          onClick={() => {
            dispatch(changeRoom("SecondRoom"));
          }}
          className="movementsButton"
        >
          Click me to advance to the Second Room
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { playerName: state.playerName };
};

export default connect(mapStateToProps)(FirstRoom);
