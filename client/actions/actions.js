const changeRoom = roomName => {
  return { type: "CHANGE_ROOM", payload: roomName };
};

const increaseHunger = hunger => {
  return { type: "INCREASE_HUNGER", payload: hunger }
}

const decreaseHunger = hunger => {
  return { type: "DECREASE_HUNGER", payload: hunger }
}

const setHungerToZero = () => {
  return { type: "SET_HUNGER_TO_ZERO" }
}

const beginDialogue = () => {
  return { type: "BEGIN_DIALOGUE" }
}

const endDialogue = () => {
  return { type: "END_DIALOGUE" }
}

const addDialogue = (dialogue) => {
  return { type: "ADD_DIALOGUE", payload: dialogue }
}

const newName = name => {
  return { type: "NEW_NAME", payload: name };
};

const addItem = item => {
  return { type: "ADD_ITEM", payload: item };
};

const firstRoomMadeDogFriend = () => {
  return { type: "FIRST_ROOM_MADE_DOG_FRIEND" };
};

const firstRoomMadeDogEnemy = () => {
  return { type: "FIRST_ROOM_MADE_DOG_ENEMY" };
};

const guardRoomSuccess = () => {
  return { type: "GUARD_ROOM_SUCCESS" };
};

const guardRoomFailure = () => {
  return { type: "GUARD_ROOM_FAILURE" };
};

const pantryRoomTookCheese = () => {
  return { type: "PANTRY_ROOM_TOOK_CHEESE" };
};

const thirdRoomEnemyBattle = () => {
  return { type: "THIRD_ROOM_ENEMY_BATTLE" };
};

const fourthRoomEnemyBattle = () => {
  return { type: "FOURTH_ROOM_ENEMY_BATTLE" };
};

const finalRoomEnemyBattle = () => {
  return { type: "FINAL_ROOM_ENEMY_BATTLE" };
};

const gameOver = deathText => {
  return { type: "GAME_OVER", payload: deathText };
};

const changePlayerHealth = health => {
  return { type: "CHANGE_PLAYER_HEALTH", payload: health };
};

const healPlayer = item => {
  return { type: "HEAL_PLAYER", payload: item.healValue };
};

const removeItem = item => {
  return { type: "REMOVE_ITEM", payload: item };
};

const newFight = enemy => {
  return { type: "NEW_FIGHT", payload: enemy };
};

const fightEnded = () => {
  return { type: "FIGHT_ENDED" };
};

const damageEnemy = damage => {
  return { type: "DAMAGE_ENEMY", payload: damage };
};

const damagePlayer = damage => {
  return { type: "DAMAGE_PLAYER", payload: damage };
};

const displayInventory = () => {
  return { type: "DISPLAY_INVENTORY" };
};

const closeInventory = () => {
  return { type: "CLOSE_INVENTORY" };
};

const equipItem = item => {
  return { type: "EQUIP_ITEM", payload: item };
};

const loadData = data => {
  return { type: "LOAD_DATA", payload: data };
};

//helper functions

export default {
  changeRoom,
  increaseHunger,
  decreaseHunger,
  setHungerToZero,
  newName,
  addItem,
  addDialogue,
  beginDialogue,
  endDialogue,
  firstRoomMadeDogFriend,
  firstRoomMadeDogEnemy,
  guardRoomSuccess,
  guardRoomFailure,
  pantryRoomTookCheese,
  gameOver,
  changePlayerHealth,
  newFight,
  fightEnded,
  thirdRoomEnemyBattle,
  fourthRoomEnemyBattle,
  finalRoomEnemyBattle,
  damageEnemy,
  damagePlayer,
  displayInventory,
  closeInventory,
  equipItem,
  healPlayer,
  removeItem,
  loadData
};
