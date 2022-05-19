import * as actionType from '../constants/actionTypes';

const authReducer = (state = { authData: null, isStudent: null }, action) => {
  switch (action.type) {
    case actionType.AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
      localStorage.setItem('isStudent', JSON.stringify({ ...action?.isStudent }));

      return { ...state, authData: action.data, isStudent: action.isStudent, loading: false, errors: null };
    case actionType.LOGOUT:
      localStorage.clear();

      return { ...state, authData: null, isStudent: null, loading: false, errors: null };
    default:
      return state;
  }
};

export default authReducer;
