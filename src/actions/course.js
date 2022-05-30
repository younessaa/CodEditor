import { FETCH_ALL, FETCH_ONE, CREATE, UPDATE, DELETE} from '../constants/actionTypes';
import * as api from '../api/index.js';

export const getCourses = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCourses();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getCourse = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchCourse(id);

    dispatch({ type: FETCH_ONE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createCourse = (post) => async (dispatch) => {
  try {
    const { data } = await api.createCourse(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateCourse = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updateCourse(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};


export const deleteCourse = (id) => async (dispatch) => {
  try {
    await await api.deleteCourse(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
