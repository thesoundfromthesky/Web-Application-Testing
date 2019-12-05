import { useReducer } from "react";

/*
### Count Rules

- balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls.
- balls and strikes reset to 0 when a `hit` is recorded.
- a `foul` increases strikes up to 2. With no strikes, a foul makes 
  it 1 strike. With 1 strike, a foul makes it 2 strikes. With two strikes 
  a foul has no effect, count stays at 2 strikes.
*/

const initialState = { strikes: 0, balls: 0 };

// - balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls.
function reset(state) {
  state.strikes = 0;
  state.balls = 0;
}

function out(state) {
  if (4 <= state.balls || 3 <= state.strikes) {
    reset(state);
  }
}

// - balls and strikes reset to 0 when a `hit` is recorded.
function hit() {
  return { ...initialState };
}

// - a `foul` increases strikes up to 2. With no strikes, a foul makes
//   it 1 strike. With 1 strike, a foul makes it 2 strikes. With two strikes
//   a foul has no effect, count stays at 2 strikes.
function foul(state) {
  if (state.strikes < 2) {
    return strike(state);
  }
  return state;
}

function strike(state) {
  const newState = { ...state, strikes: state.strikes + 1 };
  out(newState);
  return newState;
}

function ball(state) {
  const newState = { ...state, balls: state.balls + 1 };
  out(newState);
  return newState;
}

function recordReducer(state, action) {
  switch (action) {
    case "strike":
      return strike(state);
    case "ball":
      return ball(state);
    case "foul":
      return foul(state);
    case "hit":
      return hit();
    default:
      return state;
  }
}

export function useRecord(state = initialState) {
  return useReducer(recordReducer, state);
}
