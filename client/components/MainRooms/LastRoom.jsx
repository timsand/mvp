import React from "react";
import actions from "../../actions/actions.js";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";

const LastRoom = () => {
  const dispatch = useDispatch();
  const changeRoom = actions.changeRoom;
  return (
    <div>
      <div id="textWrapperRoom">
        <p>The final fight begins!!!</p>
      </div>
    </div>
  );
};

export default LastRoom;
