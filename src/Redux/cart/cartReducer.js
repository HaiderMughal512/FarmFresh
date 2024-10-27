const cartState = {
  productlist: [],
  subtotal: 0,
  totalProducts: 0,
};
const cartReducer = (state = cartState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      let exist = false;
      const addList = state.productlist.filter(item => {
        if (item.id === action.payload.id) {
          exist = true;
          item.quantity = item.quantity + 1;
          item.totalPrice = item.totalPrice + item.price;
          return item;
        } else {
          return item;
        }
      });
      return {
        subtotal: exist
          ? state.subtotal + action.payload.price
          : state.subtotal + action.payload.quantity * action.payload.price,
        totalProducts: exist ? state.totalProducts : state.totalProducts + 1,

        productlist: exist
          ? addList
          : [
              ...state.productlist,

              {
                id: action.payload.id,
                productName: action.payload.productName,
                price: action.payload.price,
                imageSource: action.payload.imageSource,
                quantity: action.payload.quantity,
                totalPrice: action.payload.price,
              },
            ],
      };
    case 'REMOVE_FROM_CART':
      const removeList = state.productlist.filter(item => {
        return item.id !== action.payload.id;
      });
      return {
        productlist: removeList,
        totalProducts: state.totalProducts - 1,
        subtotal:
          state.subtotal - action.payload.quantity * action.payload.price,
      };
    case 'INCREASE_QUANTITY':
      const newList = state.productlist.filter(item => {
        if (item.id === action.payload.id) {
          // console.log(
          //   'Redux Price',
          //   item.totalPrice,
          //   action.payload.price,
          //   item.totalPrice + action.payload.price,
          // );
          item.quantity = item.quantity + 1;
          item.totalPrice = item.totalPrice + action.payload.price;
          return item;
        } else {
          return item;
        }
      });
      return {
        productlist: newList,
        subtotal: state.subtotal + action.payload.price,
        totalProducts: state.totalProducts,
      };
    case 'DECREASE_QUANTITY':
      const newLists = state.productlist.filter(item => {
        if (item.id === action.payload.id) {
          // console.log(
          //   'Redux Price',
          //   item.totalPrice,
          //   action.payload.price,
          //   item.totalPrice + action.payload.price,
          // );
          item.quantity = item.quantity - 1;
          item.totalPrice = item.totalPrice - item.price;
          return item;
        } else {
          return item;
        }
      });
      return {
        productlist: newLists,
        subtotal: state.subtotal - action.payload.price,
        totalProducts: state.totalProducts,
      };
    default:
      return state;
  }
};
export default cartReducer;
