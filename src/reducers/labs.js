import { FETCH_ALL_LAB, FETCH_ONE_LAB, CREATE_LAB, UPDATE_LAB, DELETE_LAB } from '../constants/actionTypes';

export default (labs = [], action) => {
  switch (action.type) {
    case FETCH_ALL_LAB:
      return action.payload;
    case FETCH_ONE_LAB:
      return action.payload;
    case CREATE_LAB:
      return [...labs, action.payload];
    case UPDATE_LAB:
      return labs.map((lab) => (lab._id === action.payload._id ? action.payload : lab));
    case DELETE_LAB:
      return labs.filter((lab) => lab._id !== action.payload);
    default:
      return labs;
  }
};

