
const initialState = {
    orders: [],
  };
  
  const orderReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_ORDER':
        return {
          ...state,
          orders: [...state.orders, action.payload],
        };
      case 'REMOVE_ORDER':
        return {
          ...state,
          orders: state.orders.filter((order) => order.id !== action.payload),
        };
      case 'CLEAR_ORDERS':
        return {
          ...state,
          orders: [],
        };
      default:
        return state;
    }
  };
  
  export default orderReducer;
  