import { AUTH, UPDATE, DELETE, FETCH_ONE } from '../constants/actionTypes';
import * as api from '../api/index.js';


export const studentSignIn = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.studentSignIn(formData);
    console.log(data); 

    dispatch({ type: AUTH, data, isStudent: {result : true} });

    router('/');
  } catch (error) {
    console.log(error);
  }
};

export const studentSignUp = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.studentSignUp(formData);

    dispatch({ type: AUTH, data, isStudent: {result : true} });

    router('/');
  } catch (error) {
    console.log(error);
  }
};

export const getStudent = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchStudent(id);

    dispatch({ type: FETCH_ONE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateStudent = (id, student) => async (dispatch) => {
  try {
    const { data } = await api.updateStudent(id, student);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};


export const deleteStudent = (id) => async (dispatch) => {
  try {
    await api.deleteStudent(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

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

export const getTutor = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchTutor(id);

    dispatch({ type: FETCH_ONE, payload: data });
  } catch (error) {
    console.log(error);
  }
};


export const updateTutor = (id, tutor) => async (dispatch) => {
  try {
    const { data } = await api.updateTutor(id, tutor);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};


export const deleteTutor = (id) => async (dispatch) => {
  try {
    await api.deleteTutor(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};