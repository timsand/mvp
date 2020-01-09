import React from "react";
import actions from "../../actions/actions.js";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";

const GuardRoom = ({ roomVariables }) => {
  roomVariables = roomVariables.GuardRoom;
  const dispatch = useDispatch();
  const changeRoom = actions.changeRoom;
  const addItem = actions.addItem;
  const guardRoomSuccess = actions.guardRoomSuccess;
  const guardRoomFailure = actions.guardRoomFailure;
  const gameOver = actions.gameOver;

  const rollTheftSuccess = () => {
    const roll = Math.random() * 100;
    console.log(roll);

    if (roll > 35) {
      let rustyDagger = { name: "rusty dagger", attack: 7 };
      dispatch(addItem(rustyDagger));
      dispatch(guardRoomSuccess());
    } else {
      dispatch(guardRoomFailure());
      dispatch(gameOver("The guard cut you down. How sad!"));
    }
  };

  const roomOptions =
    roomVariables.theftSuccess === undefined ? (
      <div>
        <p>
          A guard is snoozing against a chair. His sword is yours for the
          taking!
        </p>
        <div className="specialActions">
          <button
            onClick={() => {
              rollTheftSuccess();
            }}
          >
            Attempt to steal the dagger...
          </button>
        </div>
      </div>
    ) : roomVariables.theftSuccess === true ? (
      <div>
        <p>Mission success text</p>
      </div>
    ) : (
      <div>
        <p>Mission failed text</p>
      </div>
    );

  return (
    <div>
      {roomOptions}
      <div className="movementsBar">
        <button
          onClick={() => {
            dispatch(changeRoom("SecondRoom"));
          }}
          className="movementsButton"
        >
          Proceed to room 2
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { roomVariables: state.roomVariables };
};

export default connect(mapStateToProps)(GuardRoom);
