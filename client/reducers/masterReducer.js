const playerMap = [
  [{ roomName: "FirstRoom" }],
  [{ roomName: "SecondRoom" }],
  [{ roomName: "FirstRoom" }]
];

const initialState = {
  playerName: "Grog",
  currentCoordinates: [0, 0],
  currentRoom: "FirstRoom",
  playerMap: playerMap
};

export function masterReducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_ROOM":
      let playerMap = state.playerMap;
      let coords = state.currentCoordinates;
      if (action.payload === "right") {
        let nextCoords = [coords[0] + 1, coords[1]];
        let row = nextCoords[0];
        let col = nextCoords[1];
        let newRoomName = playerMap[row][col].roomName;
        let newState = Object.assign({}, state, {
          currentRoom: newRoomName,
          currentCoordinates: nextCoords
        });
        return newState;
      }
    // let newState = Object.assign({}, state, {
    //   currentRoom: action.payload
    // });
    // return newState;
    default:
      return state;
  }
}
