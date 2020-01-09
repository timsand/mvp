import React from "react";
import actions from "../../actions/actions.js";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import enemies from "../../enemies/enemies.js";
import roomText from "../../textFiles/roomText.js";

const ThirdRoom = ({ roomVariables }) => {
  roomVariables = roomVariables.ThirdRoom;
  const dispatch = useDispatch();
  const changeRoom = actions.changeRoom;
  const newFight = actions.newFight;
  const thirdRoomEnemyBattle = actions.thirdRoomEnemyBattle;

  const fightEnemy = () => {
    const smallRat = enemies.smallRat;
    dispatch(thirdRoomEnemyBattle());
    dispatch(newFight(smallRat));
  };

  const options = roomVariables.enemy ? (
    <div>
      <div id="textWrapperRoom">
        <p>
          A giant rat blocks your path... There is only one way forward!
          <br></br>
          <br></br>
          {roomText.roomThreeText}
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
        <p>
          The rat lays slain on the floor. You are truly a hero.<br></br>
          <br></br>
          {roomText.roomThreeText}
        </p>
      </div>
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

  return <div>{options}</div>;
};

const mapStateToProps = state => {
  return { roomVariables: state.roomVariables };
};

export default connect(mapStateToProps)(ThirdRoom);
