import * as api from '../api/index.js';
import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

// Action Creators
export const getItems = () => async (dispatch) => {

  try {
    const { data } = await api.fetchItems();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
}

export const createItem = (item) => async (dispatch) => {
  try {
    // dispatch({ type: START_LOADING });
    const { data } = await api.createItem(item);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
}

export const updateItem = (id, item) => async (dispatch) => {
  try {
    const { data } = await api.updateItem(id, item);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
}

export const deleteItem = (id) => async (dispatch) => {
  try {
    await api.deleteItem(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
}
