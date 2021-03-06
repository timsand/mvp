import React from "react";
import actions from "../../actions/actions.js";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import enemies from "../../enemies/enemies.js";

const FourthRoom = ({ roomVariables }) => {
  roomVariables = roomVariables.FourthRoom;
  const dispatch = useDispatch();
  const changeRoom = actions.changeRoom;
  const newFight = actions.newFight;
  const FourthRoomEnemyBattle = actions.fourthRoomEnemyBattle;

  const fightEnemy = () => {
    const lowlyGuard = enemies.lowlyGuard;
    dispatch(FourthRoomEnemyBattle());
    dispatch(newFight(lowlyGuard));
  };

  const options = roomVariables.enemy ? (
    <div>
      <div id="textWrapperRoom">
        <p>
          The guard blocks your path to the final room! There is only one way
          forward!
        </p>
      </div>
      <div className="specialActions">
        <button
          onClick={() => {
            fightEnemy();
          }}
        >
          CHARGE!
        </button>
      </div>
    </div>
  ) : (
    <div>
      <div id="textWrapperRoom">
        <p>The guard lays slain on the floor. You are truly a monster.</p>
      </div>
      <div className="movementsBar">
        <button
          onClick={() => {
            dispatch(changeRoom("LastRoom"));
          }}
          className="movementsButton"
        >
          Proceed to the final room!
        </button>
        <button
          onClick={() => {
            dispatch(changeRoom("PantryRoom"));
          }}
          className="movementsButton"
        >
          Pantry Room
        </button>
      </div>
    </div>
  );

  return <div>{options}</div>;
};

const mapStateToProps = state => {
  return { roomVariables: state.roomVariables };
};

export default connect(mapStateToProps)(FourthRoom);
