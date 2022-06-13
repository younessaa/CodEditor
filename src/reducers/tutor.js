import { FETCH_ALL_TUTOR, FETCH_ONE_TUTOR, CREATE_TUTOR, UPDATE_TUTOR, DELETE_TUTOR, DELETE_STUDENT } from '../constants/actionTypes';

const tutorsReducer =  (tutors =  [] , action) => {
  switch (action.type) {
    case FETCH_ALL_TUTOR:
      return action.payload;
    case FETCH_ONE_TUTOR:
      return action.payload;
    case CREATE_TUTOR:
      return [...tutors, action.payload];
    case UPDATE_TUTOR:
      return tutors.map((tutor) => (tutor._id === action.payload._id ? action.payload : tutor))
    case DELETE_TUTOR:
      return tutors.filter((tutor) => tutor._id !== action.payload)
    default:
      return tutors;
  }
};

export default tutorsReducer;
