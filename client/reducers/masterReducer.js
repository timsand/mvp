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
  activeDialogue: { talking: false, dialogue: [] },
  dialogueOptions: [],
  roomVariables: {
    FirstRoom: { specialEvent: true, dogFriend: false },
    GuardRoom: { theftSuccess: null },
    ThirdRoom: { enemy: true },
    FourthRoom: { enemy: true },
    PantryRoom: { tookCheese: false },
    LastRoom: { friendlyMutt: false, enemy: true }
  },
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
      return action.payload.attack;
    case "LOAD_DATA":
      return action.payload.playerAttack;
    default:
      return state;
  }
};

const activeDialogue = (state = {}, action) => {
  switch (action.type) {
    case "BEGIN_DIALOGUE":
      let currentDialogue = Object.assign({}, state, {
        talking: true,
        dialogue: action.payload
      })
      return currentDialogue;
    case "END_DIALOGUE":
      let endDialogue = { talking: false, dialogue: [] }
      return endDialogue;
    default:
      return state;
  }
}

const dialogueOptions = (state = [], action) => {
  switch (action.type) {
    case "ADD_OPTIONS":
      let dialogueOptions = Object.assign({}, state, {
        dialogueOptions: action.payload
      })
      return dialogueOptions;
    default:
      return state;
  }
}

const playerWeapon = (state = null, action) => {
  switch (action.type) {
    case "EQUIP_ITEM":
      return action.payload.name;
    case "LOAD_DATA":
      return action.payload.playerWeapon;
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
    case "LOAD_DATA":
      return action.payload.isDisplayingInventory;
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
    case "LOAD_DATA":
      return action.payload.isFighting;
    default:
      return state;
  }
};

const currentEnemy = (state = {}, action) => {
  switch (action.type) {
    case "LOAD_DATA":
      //this is bad, and a messy fix to loading enemies in
      if (action.payload.currentEnemy) {
        return action.payload.currentEnemy;
      } else {
        return {};
      }
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
    case "LOAD_DATA":
      return action.payload.playerHealth;
    case "CHANGE_PLAYER_HEALTH":
      return action.payload;
    case "DAMAGE_PLAYER":
      return state - action.payload;
    case "HEAL_PLAYER":
      return state + action.payload;
    default:
      return state;
  }
};

const deathText = (state = "", action) => {
  switch (action.type) {
    case "LOAD_DATA":
      return action.payload.deathText;
    case "GAME_OVER":
      return action.payload;
    default:
      return state;
  }
};

const gameOver = (state = false, action) => {
  switch (action.type) {
    case "LOAD_DATA":
      return action.payload.gameOver;
    case "GAME_OVER":
      return true;
    default:
      return false;
  }
};

const roomVariables = (state = {}, action) => {
  switch (action.type) {
    case "LOAD_DATA":
      return action.payload.roomVariables;
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
    case "PANTRY_ROOM_TOOK_CHEESE":
      let pantryRoomTookCheese = Object.assign({}, state, {
        PantryRoom: { tookCheese: true }
      });
      return pantryRoomTookCheese;
    case "THIRD_ROOM_ENEMY_BATTLE":
      let thirdRoomEnemyBattle = Object.assign({}, state, {
        ThirdRoom: {
          enemy: false
        }
      });
      return thirdRoomEnemyBattle;
    case "FOURTH_ROOM_ENEMY_BATTLE":
      let fourthRoomEnemyBattle = Object.assign({}, state, {
        FourthRoom: {
          enemy: false
        }
      });
      return fourthRoomEnemyBattle;
    case "FIRST_ROOM_MADE_DOG_FRIEND":
      let lastRoomDogVariable = Object.assign({}, state, {
        FirstRoom: { specialEvent: false, dogFriend: true },
        LastRoom: { friendlyMutt: true, enemy: true }
      });
      return lastRoomDogVariable;
    case "FIRST_ROOM_MADE_DOG_ENEMY":
      let firstRoomDogVariable = Object.assign({}, state, {
        FirstRoom: { specialEvent: false, dogFriend: false }
      });
      return firstRoomDogVariable;
    case "FINAL_ROOM_ENEMY_BATTLE":
      let finalRoomBattle = Object.assign({}, state, {
        LastRoom: { enemy: false, dogFriend: true }
      });
      return finalRoomBattle;
    default:
      return state;
  }
};

const landingPage = (state = true, action) => {
  switch (action.type) {
    case "LOAD_DATA":
      return action.payload.landingPage;
    case "NEW_NAME":
      return false;
    default:
      return state;
  }
};

const playerInventory = (state = [], action) => {
  switch (action.type) {
    case "LOAD_DATA":
      return action.payload.playerInventory;
    case "ADD_ITEM":
      let newState = state.slice();
      newState.push(action.payload);
      return newState;
    case "REMOVE_ITEM":
      let toRemove = state.slice();
      toRemove.splice(toRemove.indexOf(action.payload.name), 1);
      return toRemove;
    default:
      return state;
  }
};

const playerName = (state = "", action) => {
  switch (action.type) {
    case "LOAD_DATA":
      return action.payload.playerName;
    case "NEW_NAME":
      return action.payload;
    default:
      return state;
  }
};

const currentRoom = (state = "", action) => {
  let room = action.payload;
  switch (action.type) {
    case "LOAD_DATA":
      return action.payload.currentRoom;
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
  activeDialogue,
  dialogueOptions,
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
