import { FETCH_ALL, FETCH_ONE, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

const coursesReducer =  (courses =  [] , action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case FETCH_ONE:
      return action.payload;
    case CREATE:
      return [...courses, action.payload];
    case UPDATE:
      return courses.map((tutor) => (tutor._id === action.payload._id ? action.payload : tutor))
    case DELETE:
      return courses.filter((tutor) => tutor._id !== action.payload)
    default:
      return courses;
  }
};

export default coursesReducer;
