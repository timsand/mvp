import React from "react";
import actions from "../../actions/actions.js";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import Graph from "./GraphConstructor.js";
import { useState } from "react";


var textDialogues = [["ROOT", "Well hello there"], ["A", "I hope you have a nice day"], ["B", "HOW DARE YOU SAY SUCH A THING, GET OUT!!!"], ["C", "Goodbye"]];
let g = new Graph(textDialogues);
g.addEdge("ROOT", "A", "I think I should probably get going...");
g.addEdge("ROOT", "B", "Your mother was a hamster, and your father smelled of elderberries!");
g.addEdge("A", "C", "You too. Goodbye!");


const Dialogue = ({ playerName, speechNode }) => {
  const [currentNode, setCurrentNode] = useState("ROOT");




  let currentText = speechNode.getCurrentText(currentNode);
  let currentChoices = speechNode.getChoices(currentNode);
  let modelChoices = currentChoices.map((choice, idx) => {
    return (<button key={idx} data-nextnode={choice.to} onClick={(e) => { setCurrentNode(e.target.dataset.nextnode) }}>{choice.choice}</button>)
  })
  let goodbyeOption = currentChoices.length === 0 ? (<button onClick={() => { dispatch(actions.endDialogue()) }}>End talking</button>) : "";
  const dispatch = useDispatch();
  let options;
  options = (
    <div>
      <div id="textWrapperRoom">
        <p>{currentText}</p>
      </div>
      {modelChoices}
      {goodbyeOption}
    </div>)
  return (
    <div>{options}</div>
  )
}


const mapStateToProps = state => {
  return { playerName: state.playerName };
}

export default connect(mapStateToProps)(Dialogue);