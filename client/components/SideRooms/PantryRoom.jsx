import React from "react";
import actions from "../../actions/actions.js";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";

const PantryRoom = ({ roomVariables }) => {
  roomVariables = roomVariables.PantryRoom;
  const dispatch = useDispatch();
  const changeRoom = actions.changeRoom;
  const addItem = actions.addItem;
  const tookCheese = actions.pantryRoomTookCheese;

  const options =
    roomVariables.tookCheese === true ? (
      <div>
        <div id="textWrapperRoom">
          <p>No more cheese? No more reason to stay.</p>
        </div>
      </div>
    ) : (
      <div>
        <div id="textWrapperRoom">
          <p>
            This area seems filled with food. You can see pastries, and meat,
            and is that... CHEESE?!?
          </p>
        </div>
        <div className="specialActions">
          <button
            onClick={() => {
              let agedBrie = { type: "food", name: "Aged Brie", healValue: 10 };
              dispatch(addItem(agedBrie));
              dispatch(tookCheese());
            }}
          >
            That cheese is mine!
          </button>
        </div>
      </div>
    );

  return (
    <div>
      {options}
      <div className="movementsBar">
        <button
          onClick={() => {
            dispatch(changeRoom("FourthRoom"));
          }}
          className="movementsButton"
        >
          Proceed to room 4
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { roomVariables: state.roomVariables };
};

export default connect(mapStateToProps)(PantryRoom);
