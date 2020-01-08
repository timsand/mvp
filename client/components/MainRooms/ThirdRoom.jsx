import React from "react";
import actions from "../../actions/actions.js";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import enemies from "../../enemies/enemies.js";

const ThirdRoom = ({ roomVariables }) => {
  roomVariables = roomVariables.ThirdRoom;
  console.log(roomVariables);
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
      <p>A giant rat blocks your path... There is only one way forward!</p>
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

  return <div>{options}</div>;
};

const mapStateToProps = state => {
  return { roomVariables: state.roomVariables };
};

export default connect(mapStateToProps)(ThirdRoom);
