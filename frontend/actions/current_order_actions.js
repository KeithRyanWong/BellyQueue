
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const loginOrder = (phone) => {
  return {
    type: LOGIN,
    phone,
  };
};

export const logoutOrder = () => {
  return {
    type: LOGOUT
  };
};
