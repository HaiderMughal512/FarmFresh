import {combineReducers} from 'redux';
import cartReducer from './cart/cartReducer';
import favouriteReducer from './favourite/favouriteReducer';

export default combineReducers({
  cartReducer,
  favouriteReducer,
});
