import * as atypes from '../action/actionTypes';

const initialState = {};
export default (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case atypes.SET_NAMES: {
      return {
        [`${payload.playerOneName}`]: {
          score: 0,
        },
        [`${payload.playerTwoName}`]: {
          score: 0,
        },
      };
    }

    case atypes.ADD_WIN:
      return {
        ...state,
        [`${payload.name}`]: {
          score: state[`${payload.name}`].score + 1,
        },
      };
    default:
      return state;
  }
};
