import { FETCH_ALL_LAB, FETCH_ONE_LAB, CREATE_LAB, UPDATE_LAB, DELETE_LAB} from '../constants/actionTypes';
import * as api from '../api/index.js';

export const getLabs = () => async (dispatch) => {
  try {
    const { data } = await api.fetchLabs();

    dispatch({ type: FETCH_ALL_LAB, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getLab = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchLab(id);

    dispatch({ type: FETCH_ONE_LAB, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createLab = (lab) => async (dispatch) => {
  try {
    const { data } = await api.createLab(lab);

    dispatch({ type: CREATE_LAB, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateLab = (id, lab) => async (dispatch) => {
  try {
    const { data } = await api.updateLab(id, lab);

    dispatch({ type: UPDATE_LAB, payload: data });
  } catch (error) {
    console.log(error);
  }
};


export const deleteLab = (id) => async (dispatch) => {
  try {
    await api.deleteLab(id);

    dispatch({ type: DELETE_LAB, payload: id });
  } catch (error) {
    console.log(error);
  }
};
