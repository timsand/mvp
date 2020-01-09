import React from "react";
import actions from "../../actions/actions.js";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";

const FightRoom = ({ currentEnemy, playerHealth, playerAttack }) => {
  const dispatch = useDispatch();
  const damageEnemy = actions.damageEnemy;
  const damagePlayer = actions.damagePlayer;
  const fightEnded = actions.fightEnded;
  const gameOver = actions.gameOver;

  const attack = () => {
    let attackValue = Math.round(Math.random() * 2);
    attackValue += playerAttack;
    if (currentEnemy.hp - attackValue <= 0) {
      dispatch(damageEnemy(attackValue));
    } else {
      dispatch(damageEnemy(attackValue));
      dispatch(damagePlayer(currentEnemy.attack));
      if (playerHealth - currentEnemy.attack <= 0) {
        dispatch(gameOver("The fight was too much for you. You have fallen!"));
      }
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
          <h3 className="enemyHealthBar">{currentEnemy.name} Health</h3>
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
    playerHealth: state.playerHealth,
    playerAttack: state.playerAttack
  };
};

export default connect(mapStateToProps)(FightRoom);
