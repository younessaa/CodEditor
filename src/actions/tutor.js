import { AUTH, CREATE_TUTOR, UPDATE_TUTOR, DELETE_TUTOR, FETCH_ONE_TUTOR, FETCH_ALL_TUTOR } from '../constants/actionTypes';
import * as api from '../api/index.js';


export const tutorSignIn = (formData, router) => async (dispatch) => {
    try {
      const { data } = await api.tutorSignIn(formData);
  
      dispatch({ type: AUTH, data, isStudent: {result : false} });
  
      router('/');
    } catch (error) {
      console.log(error);
    }
  };
  
  export const tutorSignUp = (formData, router) => async (dispatch) => {
    try {
      const { data } = await api.tutorSignUp(formData);
  
      dispatch({ type: AUTH, data, isStudent: {result : false}});
  
      router('/');
    } catch (error) {
      console.log(error);
    }
  };

  export const createTutor = (formData) => async (dispatch) => {
    try {
      const { data } = await api.createTutor(formData);
  
      dispatch({ type: CREATE_TUTOR, data, isStudent: {result : true} });
 
    } catch (error) {
      console.log(error);
    }
  };
  
  export const getTutors = () => async (dispatch) => {
    try {
      const { data } = await api.fetchTutors();
  
      dispatch({ type: FETCH_ALL_TUTOR, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  
  export const getTutor = (id) => async (dispatch) => {
    try {
      const { data } = await api.fetchTutor(id);
  
      dispatch({ type: FETCH_ONE_TUTOR, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  
  
  export const updateTutor = (id, tutor) => async (dispatch) => {
    try {
      const { data } = await api.updateTutor(id, tutor);
  
      dispatch({ type: UPDATE_TUTOR, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  
  
  export const deleteTutor = (id) => async (dispatch) => {
    try {
      await api.deleteTutor(id);
  
      dispatch({ type: DELETE_TUTOR, payload: id });
    } catch (error) {
      console.log(error);
    }
  };