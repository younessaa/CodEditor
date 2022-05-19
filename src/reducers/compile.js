import * as actionType from '../constants/actionTypes';

const compile = (state = { output: null }, action) => {
  switch (action.type) {
    case actionType.COMPILE:

      return { ...state, output: action.data};
    
    default:
      return state;
  }
};

export default compile;
