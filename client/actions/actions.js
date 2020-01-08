const changeRoom = nextRoom => {
  return { type: "CHANGE_ROOM", payload: nextRoom };
};

export default { changeRoom };
