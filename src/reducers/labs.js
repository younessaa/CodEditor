import { FETCH_ALL, FETCH_ONE, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

export default (labs = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case FETCH_ONE:
      return action.payload;
    case CREATE:
      return [...labs, action.payload];
    case UPDATE:
      return labs.map((lab) => (lab._id === action.payload._id ? action.payload : lab));
    case DELETE:
      return labs.filter((lab) => lab._id !== action.payload);
    default:
      return labs;
  }
};

