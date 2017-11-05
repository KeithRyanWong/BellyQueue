import { LOGIN, LOGOUT } from '../actions/current_order_actions.js';
import merge from 'lodash/merge';

const initialState = {
  phone: ''
};
// 1: {
//     id: 1,
//     name: 'Chuck Woodchuck',
//     phone: '1234567890',
//     timestamp: '5:00PM',
//     items: {
//       52: 2,
//       53: 1 
//     },
//     ready: 'false'
//   }

const ordersReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN:
      return { phone: action.phone };
    case LOGOUT:
      return { phone: '' };
    default:
      return state;
  }
};

export default ordersReducer;
