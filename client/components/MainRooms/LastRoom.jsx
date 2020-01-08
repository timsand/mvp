import React from "react";
import actions from "../../actions/actions.js";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";

const LastRoom = () => {
  const dispatch = useDispatch();
  const changeRoom = actions.changeRoom;
  return (
    <div>
      <p>The final fight begins!!!</p>
    </div>
  );
};

export default LastRoom;
