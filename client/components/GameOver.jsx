import React from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";

const GameOver = ({ deathText }) => {
  return (
    <div id="gameOverWrapper">
      <h3 id="deathHeader">UNTIMELY DEATH</h3>
      <p>{deathText}</p>
      <p id="deathEmoji">☠️☠️☠️ ☠️☠️☠️ ☠️☠️☠️</p>
    </div>
  );
};

const mapStateToProps = state => {
  return { deathText: state.deathText };
};

export default connect(mapStateToProps)(GameOver);
