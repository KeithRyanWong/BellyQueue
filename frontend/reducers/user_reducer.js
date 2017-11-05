import { RECEIVE_USER } from '../actions/user_actions';
import merge from 'lodash/merge';

const defaultState = Object.freeze({
  current: "",
});

const userReducer = (state=defaultState, action) => {
  Object.freeze(state);
  let nextState;

  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, state, { current: action.user });
    default:
      return state;
  }
};

export default userReducer;