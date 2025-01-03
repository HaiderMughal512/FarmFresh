import {
  DECEREASE_COUNT,
  SET_COUNT,
  SET_LIST,
  UPDATE_LIST,
} from '../ActionTypes';

export const UpdateNotificationList = id => {
  return {
    type: UPDATE_LIST,
    payload: id,
  };
};
export const setNotificationCount = object => {
  return {
    type: SET_COUNT,
    payload: object,
  };
};
export const decreaseNotificationCount = object => {
  return {
    type: DECEREASE_COUNT,
    payload: object,
  };
};
export const setNotificationList = list => {
  return {
    type: SET_LIST,
    payload: list,
  };
};
