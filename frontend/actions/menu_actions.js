import * as APIUtil from '../util/menu.js';

export const RECEIVE_MENU = 'RECEIVE_MENU';

export const receiveMenu = (menu) => {
  return {
    type: RECEIVE_MENU,
    menu: menu,
  };
};

export const requestMenu = () => (dispatch) => {
  APIUtil.fetchMenu().then(
    data => dispatch(receiveMenu(data)),
    errors => "whoops"
  );
};