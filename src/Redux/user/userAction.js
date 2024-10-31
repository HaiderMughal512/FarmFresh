import {ADD_USER} from '../ActionTypes';

export const addUser = object => {
  return {
    type: ADD_USER,
    payload: object,
  };
};
