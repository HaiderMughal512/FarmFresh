import {ADD_USER, CLEAR_USER} from '../ActionTypes';

export const addUser = object => {
  return {
    type: ADD_USER,
    payload: object,
  };
};
export const clearUser = object => {
  return {
    type: CLEAR_USER,
    payload: object,
  };
};
