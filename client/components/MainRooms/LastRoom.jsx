import React from "react";
import actions from "../../actions/actions.js";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";

const LastRoom = ({ roomVariables }) => {
  //render minotaur enemy based on dogfriend TODO
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

const mapStateToProps = state => {
  return { roomVariables: state.roomVariables };
};

export default connect(mapStateToProps)(LastRoom);
