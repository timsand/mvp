import React from "react";
import actions from "../../actions/actions.js";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";

const FightRoom = ({ currentEnemy, playerHealth }) => {
  console.log(currentEnemy);
  const dispatch = useDispatch();
  const changeRoom = actions.changeRoom;
  const damageEnemy = actions.damageEnemy;

  const attack = () => {
    let attackValue = Math.round(Math.random() * 5);
    dispatch(damageEnemy(attackValue));
    if (currentEnemy.hp <= 0) {
      console.log("they dead");
    } else {
      console.log("they mad");
      console.log(currentEnemy.hp);
    }
  };

  return (
    <div>
      <p>THE FIGHT BEGINS!</p>
      <div id="fightContainer">
        <div className="playerHealthContainer">
          <h3 className="playerHealthBar">Player Health</h3>
          <p className="playerHealthCount">{playerHealth}</p>
        </div>
        <div className="enemyHealthContainer">
          <h3 className="enemyHealthBar">Enemy Health</h3>
          <p className="enemyHealthCount">{playerHealth}</p>
        </div>
      </div>
      <div className="fightActions">
        <button
          onClick={() => {
            attack();
          }}
        >
          ATTACK
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { currentEnemy: state.currentEnemy, playerHealth: state.playerHealth };
};

export default connect(mapStateToProps)(FightRoom);
