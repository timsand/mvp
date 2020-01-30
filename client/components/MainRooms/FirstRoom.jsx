import React from "react";
import actions from "../../actions/actions.js";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import ChangeRooms from "../Buttons/ChangeRooms.jsx";
// import roomText from "../../textFiles/roomText.js";

const FirstRoom = ({ playerName, roomVariables }) => {
  roomVariables = roomVariables.FirstRoom;
  const dispatch = useDispatch();
  const changeRoom = actions.changeRoom;
  const addItem = actions.addItem;
  const damagePlayer = actions.damagePlayer;
  const dogFriend = actions.firstRoomMadeDogFriend;
  const dogEnemy = actions.firstRoomMadeDogEnemy;

  const dogText =
    roomVariables.dogFriend === true
      ? "The dog wags its tail happily at you!"
      : "Your hand still hurts from where the dog bit you...";
  const options =
    roomVariables.specialEvent === true ? (
      <div>
        <div id="textWrapperRoom">
          <p>
            You are in the FirstRoom {playerName}..
            <br></br>
            <br></br>
            There's not much here except for a dog chewing on his bone...
          </p>
        </div>
        <div className="specialActions">
          <button
            onClick={() => {
              let boneClub = { name: "boneClub", attack: 5 };
              dispatch(addItem(boneClub));
              dispatch(damagePlayer(3));
              dispatch(dogEnemy());
            }}
          >
            Stupid mutt! That bone is a weapon!
          </button>
          <button
            onClick={() => {
              dispatch(dogFriend());
            }}
          >
            Pet the dog and then leave him alone...
          </button>
        </div>
        <div className="movementsBar">
          <ChangeRooms room="SecondRoom" />
          <ChangeRooms room="DialogueRoom" />
        </div>
      </div>
    ) : (
        <div>
          <div id="textWrapperRoom">
            <p>
              You are in the FirstRoom {playerName}
              <br></br>
              <br></br>
              {dogText}
            </p>
          </div>
          <div className="movementsBar">
            <ChangeRooms room="SecondRoom" />
          </div>
        </div>
      );

  return <div>{options}</div>;
};

const mapStateToProps = state => {
  return { playerName: state.playerName, roomVariables: state.roomVariables };
};

export default connect(mapStateToProps)(FirstRoom);
