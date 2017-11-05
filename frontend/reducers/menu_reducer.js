import { RECEIVE_MENU } from '../actions/menu_actions';
import merge from 'lodash/merge';

const menuReducer = (state={ menu: [] }, action) => {
  Object.freeze(state);
  let nextState;

  switch (action.type) {
    case RECEIVE_MENU:
      return merge({}, state, { menu: action.menu });
    default:
      return state;
  }
};

export default menuReducer;