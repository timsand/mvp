import React from "react";
import { connect, useDispatch } from "react-redux";
import actions from "../../../actions/actions.js";
import ChangeRooms from "../../Buttons/ChangeRooms.jsx";
import BaseRoom from "../../MainRooms/BaseRoom.jsx";
import enemies from "../../../enemies/enemies.js";

const SecondRoom = ({ playerName, roomVariables }) => {
  const dispatch = useDispatch();
  const roomText = roomVariables.enemy ? `There is a ferocious creature ahead of you ${playerName}!!!` : `You killed him.`
  const clearEnemy = actions.clearEnemy;
  const newFight = actions.newFight;
  const tutorialWeakCrazedShovelhead = enemies.tutorialWeakCrazedShovelhead;

  const fightEnemy = () => {
    dispatch(clearEnemy("SecondRoom"));
    dispatch(newFight(tutorialWeakCrazedShovelhead));
  };

  return (
    <div>
      <BaseRoom roomText={roomText} />
      {roomVariables.enemy ? (<div className="specialActions">
        <button onClick={fightEnemy()} />
      </div>) : null}
      {roomVariables.enemy ? null : (
        <>
          <ChangeRooms mapMany={["SecondRoom", "TutorialStart", "SecondRoomLootSide", "ThirdRoomA"]} currentRoom="SecondRoom" nextRoom="TutorialStart" />
          {/* <ChangeRooms currentRoom="SecondRoom" nextRoom="SecondRoomLootSide" /> */}
        </>
      )}
    </div>
  )
}

const mapStateToProps = state => {
  return { roomVariables: state.roomVariables.SecondRoom, playerName: state.player.playerName };
}

export default connect(mapStateToProps)(SecondRoom);