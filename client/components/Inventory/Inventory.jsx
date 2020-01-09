import React from "react";
import Items from "./Items.jsx";
import actions from "../../actions/actions.js";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";

const Inventory = ({ isDisplayingInventory, inventory }) => {
  const dispatch = useDispatch();
  const changeRoom = actions.changeRoom;
  const displayInventory = actions.displayInventory;
  const closeInventory = actions.closeInventory;

  const individualItems = inventory.map((values, idx) => {
    return <Items item={values} key={idx} />;
  });

  // const items =
  //   isDisplayingInventory === true ? <div>{individualItems}</div> : "";

  if (isDisplayingInventory) {
    return (
      <div>
        <h3
          onClick={() => {
            dispatch(closeInventory());
          }}
        >
          Inventory
        </h3>
        {individualItems}
      </div>
    );
  } else {
    return (
      <div>
        <h3
          onClick={() => {
            dispatch(displayInventory());
          }}
        >
          Inventory
        </h3>
      </div>
    );
  }

  // return (
  //   <div>
  //     <h3
  //       onClick={() => {
  //         dispatch(displayInventory());
  //       }}
  //     >
  //       Inventory
  //     </h3>
  //     {items}
  //   </div>
  // );
};

const mapStateToProps = state => {
  return {
    isDisplayingInventory: state.isDisplayingInventory,
    inventory: state.playerInventory
  };
};

export default connect(mapStateToProps)(Inventory);
