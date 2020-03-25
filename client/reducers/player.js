import { combineReducers } from "redux";


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

const playerMoney = (state = 0, action) => {
  switch (action.type) {
    case "ADD_MONEY":
      return action.payload + state;
    case "SUBTRACT_MONEY":
      return action.payload - state;
    default:
      return state;
  }
}

const playerHunger = (state = 5, action) => {
  switch (action.type) {
    case "INCREASE_HUNGER":
      if (state + action.payload > 5) {
        return 5;
      }
      return state + action.payload;
    case "DECREASE_HUNGER":
      if (state - action.payload < 1) {
        return 1;
      }
      return state - action.payload;
    case "SET_HUNGER_TO_ZERO":
      return 0;
    default:
      return state;
  }
}

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

const playerInvestigation = (state = 1, action) => {
  switch (action.type) {
    case "INCREASE_PLAYER_INVESTIGATION":
      return (state + 1);
    case "DECREASE_PLAYER_INVESTIGATION":
      return (state - 1);
    default:
      return state;
  }
}

const player = combineReducers({
  playerName: playerName,
  playerInventory: playerInventory,
  playerMoney: playerMoney,
  playerHunger: playerHunger,
  playerHealth: playerHealth,
  playerAttack: playerAttack,
  playerWeapon: playerWeapon,
  playerInvestigation: playerInvestigation
})

export default player;