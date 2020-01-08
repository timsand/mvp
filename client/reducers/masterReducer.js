import { combineReducers } from "redux";

const playerMapContainer = [
  [{ roomName: "FirstRoom" }],
  [{ roomName: "SecondRoom" }],
  [{ roomName: "FirstRoom" }]
];

const initialState = {
  playerName: "Grog",
  currentRoom: "FirstRoom",
  playerMap: playerMapContainer,
  playerInventory: [],
  landingPage: true,
  roomVariables: { GuardRoom: {} }
};

const roomVariables = (state = {}, action) => {
  switch (action.type) {
    case "GUARD_ROOM_SUCCESS":
      let newState = Object.assign({}, state, {
        GuardRoom: {
          theftSuccess: true
        }
      });
      return newState;
    default:
      return state;
  }
};

const landingPage = (state = true, action) => {
  switch (action.type) {
    case "NEW_NAME":
      return false;
    default:
      return state;
  }
};

const playerInventory = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      let newState = state.slice();
      newState.push(action.payload);
      return newState;
    default:
      return state;
  }
};

const playerName = (state = "", action) => {
  switch (action.type) {
    case "NEW_NAME":
      return action.payload;
    default:
      return state;
  }
};

const currentRoom = (state = "", action) => {
  let room = action.payload;
  switch (action.type) {
    case "CHANGE_ROOM":
      return room;
    default:
      return state;
  }
};

const playerMap = (state = [], action) => {
  return state;
};

// const moveLeftReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "MOVE_LEFT":
//       let playerMap = state.playerMap;
//       let coords = state.currentCoordinates;
//       let nextCoords = [coords[0] - 1, coords[1]];
//       let row = nextCoords[0];
//       let col = nextCoords[1];
//       let newRoomName = playerMap[row][col].roomName;
//       let newState = Object.assign({}, state, {
//         currentRoom: newRoomName,
//         currentCoordinates: nextCoords
//       });
//       return newState;
//     default:
//       return state;
//   }
// };

const rootReducer = combineReducers({
  landingPage,
  playerName,
  playerMap,
  currentRoom,
  playerInventory,
  roomVariables
});

export default { rootReducer, initialState };
