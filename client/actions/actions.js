const changeRoom = roomName => {
  return { type: "CHANGE_ROOM", payload: roomName };
};

const newName = name => {
  return { type: "NEW_NAME", payload: name };
};

const addItem = item => {
  return { type: "ADD_ITEM", payload: item };
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

const gameOver = deathText => {
  return { type: "GAME_OVER", payload: deathText };
};

const changePlayerHealth = health => {
  return { type: "CHANGE_PLAYER_HEALTH", payload: health };
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

//helper functions

export default {
  changeRoom,
  newName,
  addItem,
  guardRoomSuccess,
  guardRoomFailure,
  pantryRoomTookCheese,
  gameOver,
  changePlayerHealth,
  newFight,
  fightEnded,
  thirdRoomEnemyBattle,
  fourthRoomEnemyBattle,
  damageEnemy,
  damagePlayer,
  displayInventory,
  closeInventory,
  equipItem
};
