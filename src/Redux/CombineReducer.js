import {combineReducers} from 'redux';
import cartReducer from './cart/cartReducer';
import favouriteReducer from './favourite/favouriteReducer';
import userReducer from './user/userReducer';

export default combineReducers({
  cartReducer,
  favouriteReducer,
  userReducer,
});
