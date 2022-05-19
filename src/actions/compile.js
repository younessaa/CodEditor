import { COMPILE } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const compileAPI = (formData) => async (dispatch) => {
    try {
      const { data } = await api.compile(formData);
  
      dispatch({ type: COMPILE, data});
      
    } catch (error) {
      console.log(error);
    }
  };