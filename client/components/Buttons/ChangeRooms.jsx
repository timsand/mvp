import React from "react";
import actions from "../../actions/actions.js";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";


const ChangeRooms = ({ currentRoom, nextRoom, mapMany }) => {
  const dispatch = useDispatch();
  const changeRoom = actions.changeRoom;
  const visit = actions.visit;

  if (mapMany) {
    let current = mapMany[0];
    mapMany = mapMany.slice(1);
    console.log(mapMany);
    let output = mapMany.map((room, idx) => {
      return (
        <button
          onClick={() => {
            dispatch(changeRoom(room));
            dispatch(visit(`VISIT_${current}`))
          }}
          className="movementsButton"
          key={`movementsButton${idx}`}
        >
          Click me to advance to the {room}
        </button>
      )
    })

    return (
      <div className="movementsBar">
        {output}
      </div>
    )
  }
  return (
    <div className="movementsBar">
      <button
        onClick={() => {
          dispatch(changeRoom(nextRoom));
          dispatch(visit(`VISIT_${currentRoom}`))
        }}
        className="movementsButton"
      >
        Click me to advance to the {nextRoom}
      </button>
    </div>
  )
}

export default ChangeRooms;