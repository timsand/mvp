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

  const sendNameToRedux = e => {
    e.preventDefault();
    dispatch(newName(state.formData));
  };

  return (
    <div>
      <form
        onSubmit={e => {
          sendNameToRedux(e);
        }}
      >
        <input
          placeholder="testMe"
          onChange={e => {
            updateState(e);
          }}
        ></input>
        <button type="submit">Enter</button>
        <h5>Test</h5>
      </form>
    </div>
  );
};

export default LandingPage;
