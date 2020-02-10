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


const Dialogue = ({ player, speechNode }) => {
  const [currentNode, setCurrentNode] = useState("ROOT");




  let currentText = speechNode.getCurrentText(currentNode);
  //fix me
  let currentChoices = speechNode.getChoices(currentNode, { nothing: 0 });
  let modelChoices = currentChoices.map((choice, idx) => {
    return (
      <div key={`div${idx}`} className="dialogueOptionsContainer">
        <span className="dialogueOptions" key={idx} data-nextnode={choice.to} onClick={(e) => { setCurrentNode(e.target.dataset.nextnode) }}>{choice.choice}</span>
      </div>
    )
  })
  let goodbyeOption = currentChoices.length === 0 ? (<span className="dialogueOptions" onClick={() => { dispatch(actions.endDialogue()) }}>End talking</span>) : "";
  const dispatch = useDispatch();
  let options;
  options = (
    <div>
      <div id="textWrapperRoom">
        <p>{currentText}</p>
      </div>
      <div id="dialogueChoicesContainer">
        {modelChoices}
        {goodbyeOption}
      </div>
    </div>)
  return (
    <div>{options}</div>
  )
}


const mapStateToProps = state => {
  return { player: state.player };
}

export default connect(mapStateToProps)(Dialogue);