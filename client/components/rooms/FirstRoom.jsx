import React from "react";

const FirstRoom = ({ playerName }) => {
  console.log(playerName);
  return (
    <div>
      <p>You are in the FirstRoom {playerName}</p>
    </div>
  );
};
