import React from "react";
import actions from "../../actions/actions.js";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";

const FightRoom = ({ currentEnemy, playerHealth }) => {
  const dispatch = useDispatch();
  const damageEnemy = actions.damageEnemy;
  const damagePlayer = actions.damagePlayer;
  const fightEnded = actions.fightEnded;

  const attack = () => {
    let attackValue = Math.round(Math.random() * 5);
    if (currentEnemy.hp - attackValue <= 0) {
      dispatch(damageEnemy(attackValue));
    } else {
      dispatch(damageEnemy(attackValue));
      dispatch(damagePlayer(currentEnemy.attack));
    }
  };

  const leave = () => {
    dispatch(fightEnded());
  };

  const buttonOptions =
    currentEnemy.hp <= 0 ? (
      <div>
        <button
          onClick={() => {
            leave();
          }}
        >
          Return
        </button>
      </div>
    ) : (
      <button
        onClick={() => {
          attack();
        }}
      >
        ATTACK
      </button>
    );

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
          <p className="enemyHealthCount">{currentEnemy.hp}</p>
        </div>
      </div>
      <div className="specialActions">{buttonOptions}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentEnemy: state.currentEnemy,
    playerHealth: state.playerHealth
  };
};

export default connect(mapStateToProps)(FightRoom);
