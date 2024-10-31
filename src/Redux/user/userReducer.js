const userstate = {
  user: {},
};
const userReducer = (state = userstate, action) => {
  switch (action.type) {
    case 'ADD_USER':
      console.log('payload', action.payload);
      return {
        user: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
