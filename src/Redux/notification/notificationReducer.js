const notificationState = {
  notificationlist: [],
  count: 0,
};

const notificationReducer = (state = notificationState, action) => {
  switch (action.type) {
    case 'SET_LIST':
      console.log('Payload', action.payload);
      return {
        notificationlist: action.payload,
        count: state.count,
      };

    case 'SET_COUNT':
      return {
        notificationlist: state.notificationlist,
        count: action.payload,
      };

    case 'UPDATE_LIST':
      const lst = state.notificationlist.map(notification =>
        notification.O_id === action.payload
          ? {...notification, Status: 'Read'} // Toggle read status
          : notification,
      );
      const cnt = state.count - 1;
      return {
        notificationlist: lst,
        count: cnt,
      };

    default:
      return state;
  }
};
export default notificationReducer;
