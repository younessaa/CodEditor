import { FETCH_ALL, FETCH_ONE, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

export default (courses = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case FETCH_ONE:
      return action.payload;
    case CREATE:
      return [...courses, action.payload];
    case UPDATE:
      return courses.map((post) => (post._id === action.payload._id ? action.payload : post));
    case DELETE:
      return courses.filter((post) => post._id !== action.payload);
    default:
      return courses;
  }
};

