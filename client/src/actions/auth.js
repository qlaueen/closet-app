import * as api from '../api/index.js';
import { AUTH } from '../constants/actionTypes';

export const signin = (form, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signIn(form);
    dispatch({ type: AUTH, data });
    navigate('/');
  } catch (error) {
    console.log(error);
  }
};

export const signup = (form, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(form);
    dispatch({ type: AUTH, data });
    navigate('/');
  } catch (error) {
    console.log(error);
  }
}