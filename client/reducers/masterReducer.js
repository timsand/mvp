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
  roomVariables: { GuardRoom: {}, ThirdRoom: { enemy: true } },
  gameOver: false,
  deathText: "",
  playerHealth: 10,
  playerAttack: 4,
  playerWeapon: null,
  isFighting: false,
  currentEnemy: {},
  isDisplayingInventory: false
};

const playerAttack = (state = 4, action) => {
  switch (action.type) {
    case "EQUIP_ITEM":
      console.log(action.payload);
      console.log(action.payload.attack);
      return action.payload.attack;
    default:
      return state;
  }
};

const playerWeapon = (state = null, action) => {
  switch (action.type) {
    case "EQUIP_ITEM":
      return action.payload.name;
    default:
      return state;
  }
};

const isDisplayingInventory = (state = false, action) => {
  switch (action.type) {
    case "DISPLAY_INVENTORY":
      return true;
    case "CLOSE_INVENTORY":
      return false;
    default:
      return state;
  }
};

const isFighting = (state = false, action) => {
  switch (action.type) {
    case "NEW_FIGHT":
      return true;
    case "FIGHT_ENDED":
      return false;
    default:
      return state;
  }
};

const currentEnemy = (state = {}, action) => {
  switch (action.type) {
    case "NEW_FIGHT":
      return action.payload;
    case "FIGHT_ENDED":
      return {};
    case "DAMAGE_ENEMY":
      let newHealth = state.hp - action.payload;
      let newHealthObj = Object.assign({}, state, {
        hp: newHealth
      });
      return newHealthObj;
    default:
      return state;
  }
};

const playerHealth = (state = 10, action) => {
  switch (action.type) {
    case "CHANGE_PLAYER_HEALTH":
      return action.payload;
    case "DAMAGE_PLAYER":
      return state - action.payload;
    default:
      return state;
  }
};

const deathText = (state = "", action) => {
  switch (action.type) {
    case "GAME_OVER":
      return action.payload;
    default:
      return state;
  }
};

const gameOver = (state = false, action) => {
  switch (action.type) {
    case "GAME_OVER":
      return true;
    default:
      return false;
  }
};

const roomVariables = (state = {}, action) => {
  switch (action.type) {
    case "GUARD_ROOM_SUCCESS":
      let guardSuccess = Object.assign({}, state, {
        GuardRoom: {
          theftSuccess: true
        }
      });
      return guardSuccess;
    case "GUARD_ROOM_FAILURE":
      let guardFailure = Object.assign({}, state, {
        GuardRoom: {
          theftSuccess: false
        }
      });
      return guardFailure;
    case "THIRD_ROOM_ENEMY_BATTLE":
      let thirdRoomEnemyBattle = Object.assign({}, state, {
        ThirdRoom: {
          enemy: false
        }
      });
      return thirdRoomEnemyBattle;
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
  roomVariables,
  gameOver,
  deathText,
  playerHealth,
  isFighting,
  currentEnemy,
  isDisplayingInventory,
  playerAttack,
  playerWeapon
});

export default { rootReducer, initialState };
