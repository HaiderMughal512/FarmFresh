import {ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE} from '../ActionTypes';

export const addToFavourite = object => {
  return {
    type: ADD_TO_FAVOURITE,
    payload: object,
  };
};
export const removeFromFavourite = object => {
  return {
    type: REMOVE_FROM_FAVOURITE,
    payload: object,
  };
};
