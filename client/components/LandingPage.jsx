import React from "react";
import { useDispatch } from "react-redux";
import actions from "../actions/actions.js";

const LandingPage = () => {
  const newName = actions.newName;
  const dispatch = useDispatch();

  const state = { formData: "" };

  const updateState = e => {
    state.formData = e.target.value;
  };

  const checkEnter = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      dispatch(newName(state.formData));
    }
  }

  return (
    <div id="landingPageContainer">
      <div id="landingPageSubContainer">
        <h2 id="landingPageTitle">Vampire the Masquerade: <br></br>Austin By Night</h2>
        <input
          autoFocus
          placeholder="testMe"
          onChange={e => {
            updateState(e);
          }}
          onKeyPress={e => checkEnter(e)}
          id="landingPageInput"
        ></input>
      </div>
    </div>
  );
};

export default LandingPage;
