const favouriteState = {
  favouriteList: [],
};
const favouriteReducer = (state = favouriteState, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVOURITE':
      let exist = false;
      const addList = state.favouriteList.filter(item => {
        if (item.P_id === action.payload.P_id) {
          exist = true;
          item.quantity = item.quantity + 1;
          item.totalPrice = item.totalPrice + item.price;
          return item;
        } else {
          return item;
        }
      });
      return {
        favouriteList: exist
          ? addList
          : [...state.favouriteList, action.payload],
      };
    case 'REMOVE_FROM_FAVOURITE':
      const removeList = state.favouriteList.filter(item => {
        return item.P_id !== action.payload.P_id;
      });

      return {
        favouriteList: removeList,
      };

    default:
      return state;
  }
};
export default favouriteReducer;
