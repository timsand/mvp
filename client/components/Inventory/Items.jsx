import React from "react";
import actions from "../../actions/actions.js";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";

const Items = props => {
  console.log(props);
  console.log("items");
  // const dispatch = useDispatch();
  // const changeRoom = actions.changeRoom;
  // const openInventory = actions.openInventory;

  // const individualItems = inventory.map((values, idx) => {
  //   return <Items name={value} />;
  // });

  // const items =
  //   isDisplayingInventory === true ? <div>{individualItems}</div> : "";

  return (
    <div>
      <h3>{props.name}</h3>
      <button value={props.name}>Equip</button>
    </div>
  );
};

// const mapStateToProps = state => {
//   return {
//     isDisplayingInventory: state.isDisplayingInventory,
//     inventory: state.playerInventory
//   };
// };

export default Items;
