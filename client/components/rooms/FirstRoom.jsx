import React from "react";
import { connect } from "react-redux";

const FirstRoom = ({ playerName }) => {
  console.log(playerName);
  return (
    <div>
      <p>You are in the FirstRoom {playerName}</p>
    </div>
  );
};

const mapStateToProps = state => {
  return { playerName: state.playerName };
};

export default connect(mapStateToProps)(FirstRoom);
