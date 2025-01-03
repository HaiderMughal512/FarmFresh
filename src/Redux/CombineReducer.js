import {combineReducers} from 'redux';
import cartReducer from './cart/cartReducer';
import favouriteReducer from './favourite/favouriteReducer';
import userReducer from './user/userReducer';
import notificationReducer from './notification/notificationReducer';

export default combineReducers({
  cartReducer,
  favouriteReducer,
  userReducer,
  notificationReducer,
});
