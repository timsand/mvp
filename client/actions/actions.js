const changeRoom = roomName => {
  return { type: "CHANGE_ROOM", payload: roomName };
};

const newName = name => {
  return { type: "NEW_NAME", payload: name };
};

const updateNameField = name => {
  return { type: "NAME_FIELD", payload: name };
};

export default { changeRoom, newName };
