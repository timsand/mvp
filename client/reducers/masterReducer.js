import { combineReducers } from "redux";
import player from "./player.js";

const playerMapContainer = [
  [{ roomName: "FirstRoom" }],
  [{ roomName: "SecondRoom" }],
  [{ roomName: "FirstRoom" }]
];

const initialState = {
  currentRoom: "FirstRoom",
  playerMap: playerMapContainer,
  landingPage: true,
  activeDialogue: false,
  currentDialogue: {},
  roomVariables: {
    FirstRoom: { specialEvent: true, dogFriend: false },
    GuardRoom: { theftSuccess: null },
    ThirdRoom: { enemy: true },
    FourthRoom: { enemy: true },
    PantryRoom: { tookCheese: false },
    LastRoom: { friendlyMutt: false, enemy: true }
  },
  player: {
    playerName: "",
    playerInventory: [],
    playerHunger: 5,
    playerAttack: 4,
    playerWeapon: null,
    playerHealth: 10
  },
  gameOver: false,
  deathText: "",
  isFighting: false,
  currentEnemy: {},
  isDisplayingInventory: false
};

const activeDialogue = (state = {}, action) => {
  switch (action.type) {
    case "BEGIN_DIALOGUE":
      return true;
    case "END_DIALOGUE":
      return false;
    default:
      return state;
  }
}

const currentDialogue = (state = {}, action) => {
  switch (action.type) {
    case "ADD_DIALOGUE":
      let dialogueOptions = action.payload;
      return dialogueOptions;
    case "END_DIALOGUE":
      return {};
    default:
      return state;
  }
}

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

const rootReducer = combineReducers({
  landingPage,
  player,
  playerMap,
  activeDialogue,
  currentDialogue,
  currentRoom,
  roomVariables,
  gameOver,
  deathText,
  isFighting,
  currentEnemy,
  isDisplayingInventory,
});

export default { rootReducer, initialState };
