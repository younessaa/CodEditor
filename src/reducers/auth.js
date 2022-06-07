import * as actionType from '../constants/actionTypes';

const authReducer = (state = { authData: null}, action) => {
  switch (action.type) {
    case actionType.AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
      localStorage.setItem('isStudent', JSON.stringify({ ...action?.isStudent }));

      return { ...state, authData: action.data, loading: false, errors: null };
    case actionType.FETCH_ONE:
      return { ...state, authData: action.payload, loading: false, errors: null };
    case actionType.UPDATE:
      let result = action?.payload;
      localStorage.setItem('profile', JSON.stringify({ ...action?.payload }));
      return { ...state, authData: action.payload, loading: false, errors: null };
    case actionType.LOGOUT:
      localStorage.clear();

      return { ...state, authData: null, loading: false, errors: null };
    default:
      return state;
  }
};

export default authReducer;
