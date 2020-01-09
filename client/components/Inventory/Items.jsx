import React from "react";
import actions from "../../actions/actions.js";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";

const Items = ({ item, isDisplayingInventory, inventory }) => {
  const dispatch = useDispatch();

  const options =
    item.type === "food" ? (
      <div>
        <h3>{item.name}</h3>
        <button
          value={item}
          onClick={e => {
            dispatch(actions.healPlayer(item));
            dispatch(actions.removeItem(item));
          }}
        >
          Use
        </button>
      </div>
    ) : (
      <div>
        <h3>{item.name}</h3>
        <button
          value={item}
          onClick={e => {
            dispatch(actions.equipItem(item));
          }}
        >
          Equip
        </button>
      </div>
    );

  return <div>{options}</div>;
};

const mapStateToProps = (state, ownProps) => {
  const item = ownProps.item;
  return {
    item: item,
    isDisplayingInventory: state.isDisplayingInventory,
    inventory: state.playerInventory
  };
};

export default connect(mapStateToProps)(Items);
