import React from "react";
import actions from "../../actions/actions.js";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";

const Items = ({ item, playerWeapon }) => {
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
        <h3
          className={item.name === playerWeapon ? "equippedWeapon" : "weapon"}
        >
          {item.name}
        </h3>
        <button
          value={item}
          className={item.name === playerWeapon ? "hideButton" : "equipButton"}
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
    playerWeapon: state.playerWeapon
  };
};

export default connect(mapStateToProps)(Items);
