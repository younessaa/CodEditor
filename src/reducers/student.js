import {UPDATE_STUDENT, DELETE_STUDENT, FETCH_ONE_STUDENT, FETCH_ALL_STUDENT, CREATE_STUDENT } from '../constants/actionTypes';

const studentsReducer =  (students =  [] , action) => {
  switch (action.type) {
    case FETCH_ALL_STUDENT:
      return action.payload;
    case FETCH_ONE_STUDENT:
      return action.payload;
    case CREATE_STUDENT:
      return [...students, action.payload];
    case UPDATE_STUDENT:
      return students.map((tutor) => (tutor._id === action.payload._id ? action.payload : tutor))
    case DELETE_STUDENT:
      return students.filter((tutor) => tutor._id !== action.payload)
    default:
      return students;
  }
};

export default studentsReducer;
