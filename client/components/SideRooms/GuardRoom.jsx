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

  const rollTheftSuccess = () => {
    dispatch(addItem("rusty dagger"));
    dispatch(guardRoomSuccess());
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
      <div>Failed</div>
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
