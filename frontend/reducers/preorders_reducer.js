import {RECEIVE_PREORDERS, RECEIVE_PREORDER, REMOVE_PREORDER} from '../actions/preorders_actions.js';
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

const preordersReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type) {
    case RECEIVE_PREORDERS:
      nextState = {};
      action.preorders.forEach (preorder => {
        nextState[preorder.id] = preorder;
      });
      return nextState;
    case RECEIVE_PREORDER:
      const newPreorder = {[action.preorder.id]: action.preorder};
      return merge({}, state, newPreorder);
    case REMOVE_PREORDER:
      nextState = merge({}, state);
      delete nextState[action.preorder.id];
      return nextState;
    default:
      return state;
  }
};

export default preordersReducer;
