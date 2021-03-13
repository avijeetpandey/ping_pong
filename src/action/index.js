import * as atypes from './actionTypes';

export const addWin = name => ({
  type: atypes.ADD_WIN,
  payload: {
    name,
  },
});

export const setNames = (playerOneName, playerTwoName) => ({
  type: atypes.SET_NAMES,
  payload: {
    playerOneName,
    playerTwoName,
  },
});
