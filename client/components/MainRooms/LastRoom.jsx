import React from "react";
import actions from "../../actions/actions.js";
import enemies from "../../enemies/enemies.js";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";

const LastRoom = ({ roomVariables }) => {
  roomVariables = roomVariables.LastRoom;
  const dispatch = useDispatch();
  const newFight = actions.newFight;
  const finalBattle = actions.finalRoomEnemyBattle;
  console.log(actions);

  const fightEnemy = () => {
    let roomEnemy = roomVariables.friendlyMutt
      ? enemies.woundedMinotaur
      : enemies.minotaur;
    dispatch(finalBattle());
    dispatch(newFight(roomEnemy));
  };

  const dogText = roomVariables.friendlyMutt
    ? "It's a minotaur! And you're not alone! It looks like your dog friend is here to do battle with you as well."
    : "It's a minotaur... Oh no, this is how all it ends";
  const victoryText = roomVariables.friendlyMutt
    ? `You did it! You're a hero, and you finally defeated the evil
  minotaur or something! The dog did most of the work though...`
    : "You have vanquished the great beast! You won the game!";
  const chargeText = roomVariables.friendlyMutt ? "CHARGE!" : "Charge?";
  const options =
    roomVariables.enemy === true ? (
      <div>
        <div id="textWrapperRoom">
          <p>{dogText}</p>
        </div>
        <div className="specialActions">
          <button
            onClick={() => {
              fightEnemy();
            }}
          >
            {chargeText}
          </button>
        </div>
      </div>
    ) : (
      <div>
        <div id="textWrapperRoom">
          <p>{victoryText}</p>
        </div>
        <div className="movementsBar"></div>
      </div>
    );

  return <div>{options}</div>;
};

const mapStateToProps = state => {
  return { roomVariables: state.roomVariables };
};

export default connect(mapStateToProps)(LastRoom);
