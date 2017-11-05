import {RECEIVE_ORDERS, RECEIVE_ORDER, REMOVE_ORDER} from '../actions/order_actions.js';
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    name: 'Chuck Woodchuck',
    phone: '1234567890',
    timestamp: '5:00PM',
    order: [['burger', 2], ['fries', 1], ['coke', 1]]
  },
  2: {
    id: 2,
    name: 'Sally Seashells',
    phone: '1234567899',
    timestamp: '5:00PM',
    order: [['pizza', 1], ['hot dog', 1], ['sprite', 1]]
  }
};

const ordersReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type) {
    case RECEIVE_ORDERS:
      nextState = {};
      action.orders.forEach (order => {
        nextState[order.id] = order;
      });
      return nextState;
    case RECEIVE_ORDER:
      const neworder = {[action.order.id]: action.order};
      return merge({}, state, neworder);
    case REMOVE_ORDER:
      nextState = merge({}, state);
      delete nextState[action.order.id];
      return nextState;
    default:
      return state;
  }
};

export default ordersReducer;
