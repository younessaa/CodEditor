import { AUTH, CREATE_STUDENT, UPDATE_STUDENT, DELETE_STUDENT, FETCH_ONE_STUDENT, FETCH_ALL_STUDENT } from '../constants/actionTypes';
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

export const createStudent = (formData) => async (dispatch) => {
  try {
    const { data } = await api.createStudent(formData);

    dispatch({ type: CREATE_STUDENT, data, isStudent: {result : true} });

  } catch (error) {
    console.log(error);
  }
};

export const getStudents = () => async (dispatch) => {
  try {
    const { data } = await api.fetchStudents();

    dispatch({ type: FETCH_ALL_STUDENT, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getStudent = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchStudent(id);

    dispatch({ type: FETCH_ONE_STUDENT, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateStudent = (id, student) => async (dispatch) => {
  try {
    const { data } = await api.updateStudent(id, student);

    dispatch({ type: UPDATE_STUDENT, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteStudent = (id) => async (dispatch) => {
    try {
      await api.deleteStudent(id);
  
      dispatch({ type: DELETE_STUDENT, payload: id });
    } catch (error) {
      console.log(error);
    }
  };
  