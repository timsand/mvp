import React from "react";
import { connect } from "react-redux";

const App = ({ currentRoom }) => {
  console.log(currentRoom);

  return (
    <div>
      <p>This will work!</p>
    </div>
  );
};

const mapStateToProps = state => {
  return { currentRoom: state.currentRoom, playerName: state.playerName };
};

export default connect(mapStateToProps)(App);
