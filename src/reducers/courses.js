import { FETCH_ALL, FETCH_ONE, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

const coursesReducer =  (state = { courses: [] }, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return { ...state, courses: action.payload, loading: false, errors: null };
    case FETCH_ONE:
      return { ...state, courses: action.payload, loading: false, errors: null };
    case CREATE:
      return { ...state, courses: [...state.courses, action.payload], loading: false, errors: null };
    case UPDATE:
      return { ...state, courses: state.courses.map((post) => (post._id === action.payload._id ? action.payload : post)), loading: false, errors: null };
    case DELETE:
      return { ...state, courses: state.courses.filter((post) => post._id !== action.payload), loading: false, errors: null };
    default:
      return state;
  }
};

export default coursesReducer;
