import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const studentSignIn = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.studentSignIn(formData);

    dispatch({ type: AUTH, data, isStudent: true });

    router('/');
  } catch (error) {
    console.log(error);
  }
};

export const studentSignUp = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.studentSignUp(formData);

    dispatch({ type: AUTH, data, isStudent: true });

    router('/');
  } catch (error) {
    console.log(error);
  }
};

export const tutorSignIn = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.tutorSignIn(formData);

    dispatch({ type: AUTH, data, isStudent: false });

    router('/');
  } catch (error) {
    console.log(error);
  }
};

export const tutorSignUp = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.tutorSignUp(formData);

    dispatch({ type: AUTH, data, isStudent: false });

    router('/');
  } catch (error) {
    console.log(error);
  }
};
