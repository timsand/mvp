import React from "react";
import actions from "../../actions/actions.js";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";

const FightRoom = ({ currentEnemy }) => {
  console.log(currentEnemy);
  const dispatch = useDispatch();
  const changeRoom = actions.changeRoom;
  return (
    <div>
      <p>THE FIGHT BEGINS!</p>
    </div>
  );
};

const mapStateToProps = state => {
  return { currentEnemy: state.currentEnemy };
};

export default connect(mapStateToProps)(FightRoom);
