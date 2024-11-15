import {
  ADD_TO_CART,
  CLEAR_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_FROM_CART,
} from '../ActionTypes';

export const addToCart = object => {
  return {
    type: ADD_TO_CART,
    payload: object,
  };
};
export const removeFromCart = object => {
  return {
    type: REMOVE_FROM_CART,
    payload: object,
  };
};
export const increaseQuantity = object => {
  return {
    type: INCREASE_QUANTITY,
    payload: object,
  };
};
export const decreaseQuantity = object => {
  return {
    type: DECREASE_QUANTITY,
    payload: object,
  };
};
export const clearData = object => {
  return {
    type: CLEAR_CART,
    payload: object,
  };
};
