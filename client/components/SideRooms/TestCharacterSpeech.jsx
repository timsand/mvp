import React from "react";
import actions from "../../actions/actions.js";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import ChangeRooms from "../Buttons/ChangeRooms.jsx";
import Graph from "../DialogueTrees/GraphConstructor.js";
import Dialogue from "../DialogueTrees/Dialogue.jsx";

var textDialogues = [["ROOT", "Well hello there"], ["A", "I hope you have a nice day"], ["B", "HOW DARE YOU SAY SUCH A THING, GET OUT!!!"], ["C", "Goodbye"]];
let g = new Graph(textDialogues);
g.addEdge("ROOT", "A", "I think I should probably get going...");
g.addEdge("ROOT", "B", "Your mother was a hamster, and your father smelled of elderberries!");
g.addEdge("A", "C", "You too. Goodbye!");


const TestCharacterSpeech = ({ playerName, roomDialogue, activeDialogue }) => {
  const dispatch = useDispatch();
  let options;
  if (activeDialogue) {
    options = (<div>
      <Dialogue playerName={playerName} speechNode={g} />
    </div>)
  } else {
    options =
      (<div>
        <div id="textWrapperRoom">
          <p>
            There is a mysterious man in the corner {playerName}...
          </p>
        </div>
        <div>
          <button onClick={
            () => {
              dispatch(actions.addDialogue(g))
              dispatch(actions.beginDialogue())
            }
          }>Begin talking</button>
        </div>
        <div className="movementsBar">
          <ChangeRooms room="FirstRoom" />
        </div>
      </div>)
  }

  return (
    <div>{options}</div>
  )
}


const mapStateToProps = state => {
  return { playerName: state.playerName, activeDialogue: state.activeDialogue };
}

export default connect(mapStateToProps)(TestCharacterSpeech);